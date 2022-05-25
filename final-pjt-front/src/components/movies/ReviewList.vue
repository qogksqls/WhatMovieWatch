<template>
  <div>
    <h3>리뷰</h3>
    <ul>
      <review-list-form></review-list-form>
      
      <review-list-item
        v-for="review in reviews"
        :key="review.pk"
        :review="review"
      >
      </review-list-item>
    </ul>
  </div>
</template>

<script>
import ReviewListItem from '@/components/movies/ReviewListItem.vue'
import ReviewListForm from '@/components/movies/ReviewListForm.vue'

export default {
    name: 'ReviewList',
    components: { ReviewListItem, ReviewListForm },
    props: { reviews: Array}
}
</script>

<style>

</style>