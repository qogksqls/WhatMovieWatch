<template>
  <div>
    <h1>Dogflix</h1>
    <ul>
        <li v-for="movie in movies" :key="movie.pk">
            {{ movie.title }}
        </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'

const API_KEY = '30e5384d094325bb014c21f1e7ddd39c'
const API_URL = 'https://api.themoviedb.org/3/search/movie'

export default {
    name: 'MovieList',
    computed: {
        ...mapGetters(['movies'])
    },
    methods: {
        ...mapActions(['fetchMovies']),
        fetchMovies() {
            const params = {
                key: API_KEY,

            }
            axios.get(API_URL, { params })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }
}
</script>

<style>

</style>