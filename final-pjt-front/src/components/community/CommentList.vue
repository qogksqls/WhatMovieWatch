<template>
  <div class="comment-list">
    
    <ul style="list-style: none; padding: 0;">
      <comment-list-item 
        v-for="comment in comments" 
        :comment="comment" 
        :key="comment.pk">
      </comment-list-item>        
    </ul>

    <comment-list-form></comment-list-form>
  </div>
</template>

<script>
import CommentListItem from '@/components/community/CommentListItem.vue'
import CommentListForm from '@/components/community/CommentListForm.vue'
// import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'CommentList',
  components: { CommentListForm, CommentListItem },
  props: { comments: Array },
}
</script>

<style>
/* .comment-list {
  border: 1px solid ;
} */
</style>