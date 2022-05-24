<template>
  <div>
    <h1>{{ movie.title }}</h1>
    <div>
      <img :src="getImgUrl(movie.poster_path)" alt="">
    </div>
    <router-link :to="{ name: 'movies' }">
      <button>Back</button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MovieDetailView',
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
