<template>
  <div class="movie-box">
    <div class="movie-info">
      <span style="font-size: 2.5rem;">
        {{ movie.title }}
        <p style="font-size: 10px; color: grey; margin: 0;">{{ movie.release_date.slice(0, 4) }}</p>
          <div class="hr-sect"></div>
        <p style="font-size: 13px; margin: 0;">관람객 {{ movie.vote_average}}</p>
          <div class="hr-sect"></div>
        <div style="font-size: 13px;">
          <span style="font-weight: bold;">장르 </span>
          <span v-for="genre in movie.genre_ids" :key="genre.id"> {{ genre.name }} |</span>
        </div>
        <div style="font-size: 13px;">
          <span style="font-weight: bold;">개봉 </span>
          <span> {{movie.release_date }}</span>
        </div>
          <div class="hr-sect"></div>
        <div>
          <div style="font-size: 15px; font-weight: bold;">줄거리</div>
          <div style="font-size: 12px">{{ movie.overview }}</div>
        </div>
      </span>
      <img :src="getImgUrl(movie.poster_path)" alt="poster" style="margin: 0 0 0 20px">
    </div>
        <div class="hr-sect"></div>
    <review-list :reviews="movie.reviews"></review-list>
    <div>
      <router-link :to="{ name: 'random' }">
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

.hr-sect {
	display: flex;


	color: rgba(0, 0, 0, 0.35);
	font-size: 12px;
	margin: 8px 0px;
}
.hr-sect::before,
.hr-sect::after {
	content: "";
	flex-grow: 1;
	background: rgba(0, 0, 0, 0.35);
	height: 1px;
	font-size: 0px;
	line-height: 0px;

}

</style>
