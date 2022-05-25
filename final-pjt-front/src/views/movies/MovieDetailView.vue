<template>
  <div>
    <h1>{{ movie.title }}</h1>
    <div>
      <img :src="getImgUrl(movie.poster_path)" alt="poster">
    </div>
    <h2>
      <div>
        tmdb 평점: {{ movie.vote_average}}
      </div>
      <div>
        {{ movie.vote_count }}명 참여
      </div>
      <div>
        장르: {{ movie.genre_ids}}
      </div>
      <div>
        overview: {{ movie.overview }}
      </div>
      <div>
        원제목: {{ movie.original_title }}
      </div>
      <div>
        개봉일: {{ movie.release_date}}
      </div>
    </h2>
    <review-list :reviews="movie.reviews"></review-list>
    <div>
      <router-link :to="{ name: 'movies' }">
        <button>Back</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ReviewList from '@/components/movies/ReviewList.vue'

export default {
  name: 'MovieDetailView',
  components: { ReviewList },
  data() {
    return {
        moviePk: this.$route.params.moviePk,
    }
  },
  computed: {
    ...mapGetters(['movie'])
  },
  methods: {
    ...mapActions(['fetchMovie']),
    getImgUrl(url) {
      const imgUrl = `https://image.tmdb.org/t/p/w185/${url}`
      return imgUrl
    },
  },
  created() {
    this.fetchMovie(this.moviePk)
  },
}
</script>

<style>

</style>
