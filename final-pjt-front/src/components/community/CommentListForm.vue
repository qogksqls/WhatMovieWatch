<template>
  <form @submit.prevent="onSubmit" class="comment-list-form">
    <label for="comment"></label>
    <input style="width: 100%; height: 50px;" type="text" id="comment" v-model="content" required placeholder="댓글을 입력하세요.">
    <button class="btn btn-primary">Comment</button>
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
</style>