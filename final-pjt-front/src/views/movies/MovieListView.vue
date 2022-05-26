<template>
  <div>
    <h1 style="text-align: center;">POPULAR MOVIE RANKING</h1>
    <div>
      <ul class="popular-list row row-cols-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 gy-3" style="padding-right: 7.5rem;">
        <li v-for="movie in movies" :key="movie.id" style="list-style: none">
          <router-link 
            :to="{ name: 'movie', params: { moviePk: movie.id } }">
            <img class="container" :src="getImgUrl(movie.poster_path)" alt="poster" style="height: 12rem; width: 12rem;">
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

<style scoped>
 *{ font-family: 'Luckiest Guy', cursive;}

.poppular-list:hover {
  padding: 1px;
}

.container:hover {
  transform : scale(1.3);
  transition : all 250ms ease-in;
}

</style>