<template>
  <div>
    <h1>Home</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.pk">
        <!-- 글 이동 링크 (제목) -->
        <router-link 
          :to="{ name: 'movie', params: {moviePk: movie.pk} }">
          {{ movie.title }}
        </router-link>

      </li>
    </ul>
   
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
      ...mapActions(['fetchMovies'])
    },
    created() {
      this.fetchMovies()
    },
  }
</script>
<!-- <script>
import { mapGetters } from 'vuex'
// import MovieCard from '@/components/movies/MovieCard'
export default {
  name: 'MovieListView',
  // components: {
  //   MovieCard,
  // },
  methods: {
    setToken() {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      return config
    },
  },
  computed: {
    ...mapGetters([
      'movies', 'genre_names'
    ])
  },
  created() {
    this.$store.dispatch('fetchMovies', this.setToken())
    // this.$store.dispatch('getGenres', this.setToken())
  },
}
</script> -->

<style>
</style>