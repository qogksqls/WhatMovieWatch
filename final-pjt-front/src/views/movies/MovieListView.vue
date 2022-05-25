<template>
  <div>
    <h1>POPULAR MOVIE RANKING</h1>
    <div>
      <ul class="popular-list row row-cols-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 gy-3">
        <li v-for="movie in movies" :key="movie.id" style="list-style: none">
          <router-link 
            :to="{ name: 'movie', params: { moviePk: movie.id } }">
            <img :src="getImgUrl(movie.poster_path)" alt="poster">

          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'MovieList',
    computed: {
      ...mapGetters(['movies'])
    },
    methods: {
      ...mapActions(['fetchMovies']),
      getImgUrl(url) {
        const imgUrl = `https://image.tmdb.org/t/p/w185/${url}`
        return imgUrl
      },
    },
    created() {
      this.fetchMovies()
    },
  }
</script>

<style>
.poppular-list:hover {
  padding: 1px;
}
</style>
