<template>
  <div class="movie-box">
    <div class="movie-info">
      <span style="font-size: 2.5rem;">
        {{ movie.title }}
        <p style="font-size: 10px; color: grey; margin: 0;">{{ movie.release_date.slice(0, 4) }}</p>
        <hr style="margin: 5px 0 5px">
        <p style="font-size: 13px; margin: 0;">관람객 {{ movie.vote_average}}</p>
        <hr style="margin: 5px 0 5px">
        <div style="font-size: 13px;">
          <span style="font-weight: bold;">장르 </span>
          <span v-for="genre in movie.genre_ids" :key="genre.id"> {{ genre.name }} |</span>
        </div>
        <div style="font-size: 13px;">
          <span style="font-weight: bold;">개봉 </span>
          <span> {{movie.release_date }}</span>
        </div>
        <hr style="margin: 5px 0 5px">
        <div>
          <div style="font-size: 15px; font-weight: bold;">줄거리</div>
          <div style="font-size: 12px">{{ movie.overview }}</div>
        </div>
      </span>
      <img :src="getImgUrl(movie.poster_path)" alt="poster" style="margin: 0 0 0 20px">
    </div>
    <hr>
    <review-list :reviews="movie.reviews"></review-list>
    <div>
      <router-link :to="{ name: 'movies' }">
        <button class="btn btn-secondary">Back</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ReviewList from '@/components/movies/ReviewList.vue'

export default {
  name: 'MovieDetailView',
  components: { ReviewList },
  data() {
    return {
        moviePk: this.$route.params.moviePk,
    }
  },
  computed: {
    ...mapGetters(['movie'])
  },
  methods: {
    ...mapActions(['fetchMovie']),
    getImgUrl(url) {
      const imgUrl = `https://image.tmdb.org/t/p/w185/${url}`
      return imgUrl
    },
  },
  created() {
    this.fetchMovie(this.moviePk)
  },
}
</script>

<style>
.movie-box {
  margin: 2rem;
  padding: 2rem;
  background-color: whitesmoke;
}
.movie-info {
  display: flex;
  justify-content: space-between;
}
</style>
