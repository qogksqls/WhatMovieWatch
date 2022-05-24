<template>
  <div>
<<<<<<< HEAD
    <input type="text" name="" id="">
=======
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
   
>>>>>>> 331f60559f73e4e5de3d037f90bf1307c6a251ec
  </div>
</template>

<<<<<<< HEAD
<script>
=======
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
>>>>>>> 331f60559f73e4e5de3d037f90bf1307c6a251ec
export default {
  name: 'MovieListView',
  
}
</script>

<style>

</style>