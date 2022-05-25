<template>
  <form @submit.prevent="onSubmit" class="comment-list-form">
    <label for="comment">comment: </label>
    <input type="text" id="comment" v-model="content" required>
    <button>Comment</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListForm',
  data() {
    return {
      content: '',
      created_at: null,
      updated_at: null
    }
  },
  computed: {
    ...mapGetters(['article']),
  },
  methods: {
    ...mapActions(['createComment']),
    onSubmit() {
      this.createComment({
        articlePk: this.article.pk,
        content: this.content,
        created_at: this.created_at,
        updated_at: this.updated_at,
      })
      this.content = ''
    }
  }
}
</script>

<style>
.comment-list-form {
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
}
</style>