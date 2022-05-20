<template>
  <li class="comment-list-item">
    <router-link :to="{ name: 'profile', params: { username: comment.user.username } }">
      {{ comment.user.username }}
    </router-link>: 
    
    <span v-if="!isEditing">
      {{ payload.content }}
      <hr>
      작성 시간: {{ payload.created_at }}
      <hr>
      수정 시간: {{ payload.updated_at }} (새로고침하세요)
    </span>
    <hr>
    <span v-if="isEditing">
      <input type="text" v-model="payload.content">
      <button @click="onUpdate">Update</button> |
      <button @click="switchIsEditing">Cancle</button>
    </span>

    <span v-if="currentUser.username === comment.user.username && !isEditing">
      <button @click="switchIsEditing">Edit</button> |
      <button @click="deleteComment(payload)">Delete</button>
    </span>
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListItem',
  props: { comment: Object },
  data() {
    return {
      isEditing: false,
      payload: {
        articlePk: this.comment.article,
        commentPk: this.comment.pk,
        content: this.comment.content,
        created_at: this.comment.created_at,
        updated_at: this.comment.updated_at
      },
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    ...mapActions(['updateComment', 'deleteComment']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateComment(this.payload)
      this.isEditing = false
    }
  },

}
</script>

<style>
.comment-list-item {
  border: 1px solid green;

}
</style>