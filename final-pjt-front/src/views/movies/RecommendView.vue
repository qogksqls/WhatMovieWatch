<template>
  <div class="RecommendView">
    <header>
      <h2>당신이 좋아할 만한</h2>
      <h4>당신이 가장 좋아하는 장르는 {{ bestGenre }}입니다.</h4>
    </header>
    <div v-if="recommendMovies == null">영화 추천하고 오세요~</div>
    <!-- MovieCards -->
    <div class="popular-list row row-cols-1 row-cols-md-5 gy-3">
      <MovieCard
        v-for="(movie, idx) in recommendMovies"
        :key="idx"
        :movie="movie"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MovieCard from '@/components/movies/MovieCard'

export default {
  name: 'RecommendView',
  components: {
    MovieCard,
  },

  computed: {
    ...mapGetters([
      'recommendMovies', 'bestGenre'
    ])
  },

}
</script>

<style>

</style>
