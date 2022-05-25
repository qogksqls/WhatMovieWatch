<template>
  <div>
    <form @submit.prevent="onSubmit" class="review-list-form">
      <div>
        평점: <input type="number" min="1" max="10" placeholder="1" v-model="vote" required>
      </div>
        <label for="review"></label>
        <input type="text" placeholder="감상평을 등록해주세요." v-model="content" required>
      <button>등록</button>
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
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
}
</style>