<template>
  <div>
    <h1>Dogflix</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import axios from 'axios'

// d4cabca9a0ee31db4bf7d9ef5ffb6064
// https://api.themoviedb.org/3/movie/550?api_key=d4cabca9a0ee31db4bf7d9ef5ffb6064
const API_KEY = '30e5384d094325bb014c21f1e7ddd39c'
const API_URL = 'https://api.themoviedb.org/3/'

export default {
    name: 'MovieList',
    computed: {
        ...mapGetters(['movies'])
    },
    methods: {
        ...mapActions(['fetchMovies']),
        fetchMovies() {
            return `${API_URL}/movie/poppular?api_key=${API_KEY}`
        //     const params = {
        //         key: API_KEY,

        //     }
        //     axios.get(API_URL, { params })
        //         .then(res => {
        //             console.log(res)
        //         })
        //         .catch(err => {
        //             console.error(err)
        //         })
        }
    }
}
</script>

<style>

</style>