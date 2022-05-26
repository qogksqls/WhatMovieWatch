<template>
  <div class="cards-box">
    <div v-for="randomMovie in randomMovies" :key="randomMovie.id" style="margin: 10px;">
      <router-link :to="{ name: 'randommovie', params: { moviePk: randomMovie.id } }">
        <div>
          <img class="container" :src="getImgUrl(randomMovie.poster_path)" alt="poster" style="height: 18rem; width: 15rem;">
        </div>
      </router-link>
    </div>
  </div>
    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'RandomView',

  computed: {
    ...mapGetters([
      'randomMovies', 'movie',
    ])
  },
  methods: {
    ...mapActions(['getRandomMovies', 'getRandomMovie']),
    getImgUrl(url) {
      const imgUrl = `https://image.tmdb.org/t/p/w185/${url}`
      return imgUrl
    },
  },
  created() {
    this.getRandomMovies(),
    this.getRandomMovie(this.moviePk)
  },
}
</script>

<style>
.cards-box {
  display: flex;
  margin: 20px;
  margin-top: 65px;
  flex-wrap: wrap;
  float: left;
}

.container:hover {
  transform : scale(1.3);
  transition : all 250ms ease-in;
} 
</style>
