<template>
  <div>
    <h1>{{ randomMovie.title }}</h1>
    <div>
      <img :src="getImgUrl(randomMovie.poster_path)" alt="poster">
    </div>
    <h2>
      <div>
        tmdb 평점: {{ randomMovie.vote_average}}
      </div>
      <div>
        {{ randomMovie.vote_count }}명 참여
      </div>
      <div>
        장르: {{ randomMovie.genre_ids}}
      </div>
      <div>
        overview: {{ randomMovie.overview }}
      </div>
      <div>
        원제목: {{ randomMovie.original_title }}
      </div>
      <div>
        개봉일: {{ randomMovie.release_date}}
      </div>
    </h2>
    <review-list :reviews="randomMovie.reviews"></review-list>
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
    ...mapGetters(['randomMovie'])
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
