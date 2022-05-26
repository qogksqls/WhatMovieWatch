<template>
  <div>
    <form @submit.prevent="onSubmit" class="review-list-form">
      <div>
        평점: <input style="margin-bottom: 5px;" type="number" min="1" max="10" placeholder="--" v-model="vote" required>
      </div>
        <label for="review"></label>
        <input type="text" id="comment" style="width: 80%; height: 45px; margin-bottom: 5px;" placeholder="감상평을 등록해주세요." v-model="content" required> |
      <button style="margin-left: 10px;" class="test btn btn-outline-primary bt-sm flex-item-gnb">Comment</button>
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

<style>
.review-list-form {
  border: 1px solid whitesmoke;
  width: 100%
}
.flex-item-gnb {
  margin-left: auto;
}


@-webkit-keyframes sparkle {
  from {
    background-position: 0% 100%;
  }
  to {
    background-position: 200% 100%;
  }
}

@keyframes sparkle {
  from {
    background-position: 0% 100%;
  }
  to {
    background-position: 200% 100%;
  }
}
.test {
  background: whitesmoke;
  display: inline-block;
  padding: 0.5em;
  border-radius: 4px;
  position: relative;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.19);
}
.test:before {
  -webkit-animation: sparkle 4s infinite linear;
          animation: sparkle 4s infinite linear;
  background: linear-gradient(90deg, #7FEFBD 0%, #FFF689 11%, #EC0B43 22%, #7FEFBD 33%, #FFF689 44%, #EC0B43 55%, #7FEFBD 66%, #FFF689 77%, #EC0B43 88%, #7FEFBD 100%);
  background-size: 300% 100%;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 105%;
  height: 105%;
  border-radius: 4px;
  filter: blur(3px);
  transform: scale(0.99) translateY(3px);
}
.test:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.test:hover {

  color: #ffffff;
  opacity: 0.7;
}
</style>