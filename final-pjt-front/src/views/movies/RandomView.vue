<template>
    <div class="cards-box">
      <div v-for="randomMovie in randomMovies" :key="randomMovie.id">
      <div class="card" style="width: 18rem;">
        <router-link :to="{ name: 'movie', params: { moviePk: randomMovie.id } }">
          <div>
            <img :src="getImgUrl(randomMovie.poster_path)" alt="poster" style="height: 30rem; width: 18rem;">
          </div>
        </router-link>
        <div class="card-body">
          <h5 class="card-title" >{{ randomMovie.title }}</h5>
          <!-- <p class="card-text">{{ randomMovie.overview }}</p> -->
          <a href="#" class="btn btn-white" style= "background-color: #FFDAB9;"> Movie Detail </a>
        </div>
      </div>
      </div>
        <!-- <div v-for="randomMovie in randomMovies" :key="randomMovie.id">{{ randomMovie.title }}
      <router-link :to="{ name: 'movie', params: { moviePk: randomMovie.id } }">
          <div>
            <img :src="getImgUrl(randomMovie.poster_path)" alt="poster">
          </div>
      </router-link>
        </div> -->
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
            margin: 10px 70px;
            margin-top: 65px;
            flex-wrap: wrap;
            float: left;
        }
</style>
