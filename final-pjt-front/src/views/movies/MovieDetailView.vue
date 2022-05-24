<template>
  <div>
    <h1>디테일페이지</h1>
    <h1>{{ movie.title }}</h1>
  </div>
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
