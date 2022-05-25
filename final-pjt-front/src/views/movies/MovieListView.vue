<template>
  <div>
    <h1>Home</h1>
    <div>
      <ul>
        <li class="card" v-for="movie in movies" :key="movie.id">
          <router-link 
            :to="{ name: 'movie', params: { moviePk: movie.id } }">
            
            <img :src="getImgUrl(movie.poster_path)" alt="poster">
            => {{ movie.title }}
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
ul {
  padding-left: 0;
}
</style>
