 <template>
  <div>
    <li class="comment-list-item">
      <div>
        <img src="@/assets/익명이.png" alt="" style="width: 2rem; height: 2rem; border-radius: 40%;">
        <router-link :to="{ name: 'profile', params: { username: comment.user.username }}" style="margin-left: 3px">
          {{ comment.user.username }}
        </router-link>: 
        <span v-if="!isEditing">
          {{ payload.content }}
          <div>
            <span v-if="comment.created_at === comment.updated_at" style="font-size: 12px">{{ comment.created_at.slice(2, 10) }} {{ comment.created_at.slice(11, 19) }}</span>
            <span v-if="comment.created_at !== comment.updated_at" style="font-size: 12px">{{ comment.created_at.slice(2, 10) }} {{ comment.created_at.slice(11, 19) }}(수정됨)</span>
          </div>
        </span>
      </div>
      <span v-if="isEditing">
        <input type="text" v-model="payload.content" style="margin-right: 8px">
        <button class="btn btn-outline-primary btn-sm" @click="onUpdate">Update</button> |
        <button class="btn btn-outline-secondary btn-sm" @click="switchIsEditing">Cancel</button>
      </span>
  
      <span v-if="currentUser.username === comment.user.username && !isEditing">
        <button class="btn btn-outline-primary btn-sm" @click="switchIsEditing">Edit</button> |
        <button class="btn btn-outline-danger btn-sm" @click="deleteComment(payload)">Delete</button>
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