<template>
    <div>
      <router-link :to="{ name: 'movie' }">
        <li v-for="randomMovie in randomMovies" :key="randomMovie.id">{{ randomMovie.title }}
          <div>
            <img :src="getImgUrl(randomMovie.poster_path)" alt="poster">
          </div>
        </li>
      </router-link>
    </div>
    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'RandomView',

  computed: {
    ...mapGetters([
      'randomMovies',
    ])
  },
  methods: {
    ...mapActions(['getRandomMovies']),
    getImgUrl(url) {
      const imgUrl = `https://image.tmdb.org/t/p/w185/${url}`
      return imgUrl
    },
  },
  created() {
    this.getRandomMovies()
  },
}
</script>

<style>

</style>
