<template>

  <div>
    <img class="box" src="@/assets/익명이.png" alt="" style="display: block; margin: 0px auto; width: 8rem; height: 8rem; border-radius: 40%;">
    <h1 style="text-align: center; font-size: 65px;">
      {{ profile.username }}
        <div class="center-outer">  
          <div class="center-inner">

            <div class="bubbles">
              <h1>Bubbling Header</h1>
            </div>

          </div>
        </div>
      </h1>
    <div class="my-articles" style="position: absolute">
      <h2 style="text-align: center; bubbles;">작성한 글</h2>
      <ul class="mylist">
        <li v-for="article in profile.articles" :key="article.pk" style="list-style: none">
          <router-link :to="{ name: 'article', params: { articlePk: article.pk } }">
            {{ article.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="like-it">
      <h2 style="text-align: center;">좋아요를 누른 글</h2>
      <ul class="mylist">
        <li v-for="article in profile.like_articles" :key="article.pk" style="list-style: none">
          <router-link :to="{ name: 'article', params: { articlePk: article.pk } }">
            {{ article.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import $ from 'jquery'

 $(document).ready(function(){
 
    var bArray = [];
    var sArray = [4,6,8,10];
 
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
 
    setInterval(function(){
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity' : '-=0.7'
        }, 3000, function(){
            $(this).remove()
        }
        );
    }, 350);
})

export default {
  name: 'ProfileView',
  computed: {
    ...mapGetters(['profile'])
  },
  methods: {
    ...mapActions(['fetchProfile'])
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  },
}
</script>

<style scoped>
 *{ font-family: 'Single Day', sans-serif; font-weight: bold;}

html, body {
width: 100%;
height: 100%;
margin: 0;
}

.center-outer {
display: table;
width: 100%;
height: 100%;
}

.center-inner {
display: table-cell;
vertical-align: middle;
text-align: center;
}

/* Essential CSS - Makes the effect work */

body {
background-color: #3498db;
}

.bubbles {
display: inline-block;
font-family: arial;
position: relative;
}

.bubbles h1 {
position: relative;
margin: 1em 0 0;
font-family: 'Luckiest Guy', cursive;
color: #ffff;
z-index: 2;
}

.individual-bubble {
position: absolute;
border-radius: 100%;
bottom: 10px;
background-color: #ffff;
z-index: 1;
}

h1 {
  text-align: center;
  width: 100%;
  margin: 0px auto;
  color: rgb(235, 209, 209);
  font-size: 80px;
  letter-spacing: 5px;
  
  text-shadow: -2px -2px 1px rgb(0, 0, 0),
    3px 3px 4px rgb(15, 8, 8),
    6px 6px 0px rgb(68, 60, 60);
}

ul.mylist li:before,
ol.mylist li:before {
    content: ">";
    display: inline-block;
    vertical-align: middle;
    padding: 0px 5px 6px 0px;
    margin-left: 25%;
}

.my-articles {
  border: 1px black;
}

.box {
    animation: wobble 5s ease infinite;
}

@keyframes wobble {
    0%, 100% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }
    15% {
        -webkit-transform: translateX(-32px) rotate(-10deg);
        transform: translateX(-32px) rotate(-10deg);
    }
    30% {
        -webkit-transform: translateX(calc(32px / 2)) rotate(10deg);
        transform: translateX(calc(32px / 2)) rotate(10deg);
    }
    45% {
        -webkit-transform: translateX(calc(-32px / 2)) rotate(calc(-10deg / 1.8));
        transform: translateX(calc(-32px / 2)) rotate(calc(-10deg / 1.8));
    }
    60% {
        -webkit-transform: translateX(calc(32px / 3.3)) rotate(calc(10deg / 3));
        transform: translateX(calc(32px / 3.3)) rotate(calc(10deg / 3));
    }
    75% {
        -webkit-transform: translateX(calc(-32px / 5.5)) rotate(calc(-10deg / 5));
        transform: translateX(calc(-32px / 5.5)) rotate(calc(-10deg / 5));
    }
}

</style>