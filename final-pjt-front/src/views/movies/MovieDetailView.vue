<template>
  <h1>{{ movie.title }}</h1>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MovieDetailView',
  data() {
    return { moviePk: this.$route.params.moviePk }
  },
  created() {
    console.log(this.moviePk)
    this.fetchMovie(this.moviePk)
    
  },
  computed: {
    ...mapGetters(['movie'])
  },
  methods: {
    ...mapActions(['fetchMovie'])
  }
}
</script>

<style>

</style>
