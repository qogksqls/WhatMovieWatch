<template>
  <div>
    <form @submit.prevent="onSubmit" class="review-list-form">
      <label for="review">review: </label>
      <input type="text" v-model="content" required>
      <button>Review</button>
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
        })
        this.content = ''
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