<template>
  <div>
    <form @submit.prevent="onSubmit" class="review-list-form">
      <div>
        평점: <input style="margin-bottom: 5px;" type="number" min="1" max="10" placeholder="--" v-model="vote" required>
      </div>
        <label for="review"></label>
        <input type="text" id="comment" style="width: 80%; height: 45px; margin-bottom: 5px;" placeholder="감상평을 등록해주세요." v-model="content" required> |
          <div class="box1 testT" style="margin: 3px">
            <button class="box2 btn btn-outline-primary btn-sm flex-item-gnb" style="background: whitesmoke;">Comment</button>
          </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'ReviewListForm',
    data() {
      return {
        content: '',
        vote: null,
      }
    },
    computed: {
      ...mapGetters(['movie'])
    },
    methods: {
      ...mapActions(['createReview']),
      onSubmit() {
        this.createReview({
          moviePK: this.movie.id,
          content: this.content,
          vote: this.vote,
        })
        this.content = ''
        this.vote = null
      }
    }
}
</script>

<style scoped>
.review-list-form {
  border: 1px solid whitesmoke;
  width: 100%
}
.flex-item-gnb {
  margin-left: auto;
}

.box1{z-index:10;}
.box2{position:relative; z-index:1;}

@-webkit-keyframes sparkleT {
  from {
    background-position: 0% 100%;
  }
  to {
    background-position: 200% 100%;
  }
}

@keyframes sparkleT {
  from {
    background-position: 0% 100%;
  }
  to {
    background-position: 200% 100%;
  }
}
.testT {

  display: inline-block;
  padding: 0.5em;
  border-radius: 4px;
  position: relative;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.19);
}
.testT:before {
  -webkit-animation: sparkleT 4s infinite linear;
          animation: sparkleT 4s infinite linear;
  background: linear-gradient(90deg, #7FEFBD 0%, #FFF689 11%, #EC0B43 22%, #7FEFBD 33%, #FFF689 44%, #EC0B43 55%, #7FEFBD 66%, #FFF689 77%, #EC0B43 88%, #7FEFBD 100%);
  background-size: 300% 100%;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 95%;
  height: 95%;
  border-radius: 4px;
  filter: blur(3px);
  transform: scale(0.99) translateY(3px);
}
.testT:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.testT:hover {

  color: #ffffff;
  opacity: 0.7;
}
</style>