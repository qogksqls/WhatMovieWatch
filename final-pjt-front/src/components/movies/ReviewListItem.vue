<template>
  <li class="review-list-item" style="list-style: none;">
    <div>
      평점: {{ review.vote }}점
    </div>
    <span v-if="!isEditing">
      {{ payload.content }}
    </span>
    <span v-if="isEditing">
      <input type="text" v-model="payload.content">
      <button class="btn btn-primary" @click="onUpdate">Update</button> |
      <button class="btn btn-secondary" @click="switchIsEditing">Cancel</button>
    </span>

    <span v-if="currentUser.username === review.user.username && !isEditing">
      <button class="btn btn-outline-primary btn-sm" @click="switchIsEditing">Edit</button> |
      <button class="btn btn-outline-danger btn-sm" @click="deleteReview(payload)">Delete</button>
    </span>
    <div>
      <router-link :to="{ name: 'profile', params: { username: review.user.username } }">
        {{ review.user.username }}
      </router-link>
      <span v-if="review.created_at === review.updated_at">
        | {{ review.created_at.slice(2, 10) }} {{ review.created_at.slice(11, 19)}} | 신고
      </span>
      <span v-if="review.created_at !== review.updated_at">
        | {{ review.updated_at.slice(2, 10) }} {{ review.updated_at.slice(11, 19)}} (수정됨) | 신고
      </span>
      
    </div>
  </li>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ReviewListItem',
  props: { review: Object },
  data() {
    return {
      isEditing: false,
      payload: {
        moviePk: this.review.movie,
        reviewPk: this.review.pk,
        content: this.review.content,
        vote: this.review.vote
      },
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    ...mapActions(['updateReview', 'deleteReview']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateReview(this.payload)
      this.isEditing = false
    }
  },
}
</script>

<style>
.review-list-item {
  border: 1px solid rgb(234, 226, 226);
  margin-bottom: 3px;
  padding: 10px;
}
</style>