 <template>
  <div>
    <li class="comment-list-item">
      <div>
        <img src="@/assets/익명이.png" alt="" style="width: 2rem; height: 2rem;">
        <router-link :to="{ name: 'profile', params: { username: comment.user.username } }">
          {{ comment.user.username }}
        </router-link>: 
        <span v-if="!isEditing">
          {{ payload.content }}
          <div>
            <span v-if="comment.created_at === comment.updated_at">{{ comment.created_at.slice(0, 19) }}</span>
            <span v-if="comment.created_at !== comment.updated_at">{{ comment.updated_at.slice(0, 19) }} (수정됨)</span>
          </div>
        </span>
      </div>
      <span v-if="isEditing">
        <input type="text" v-model="payload.content">
        <button class="btn btn-primary" @click="onUpdate">Update</button> |
        <button class="btn btn-secondary" @click="switchIsEditing">Cancle</button>
      </span>
  
      <span v-if="currentUser.username === comment.user.username && !isEditing">
        <button class="btn btn-primary" @click="switchIsEditing">Edit</button> |
        <button class="btn btn-warning" @click="deleteComment(payload)">Delete</button>
      </span>
    </li>
    <hr>  
  </div>
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
  /* border: 1px solid green; */
  margin-left: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}
</style>