import axios from 'axios'
import drf from '@/api/drf'
import router from '@/router'

export default {
  state: {
    movies: [],
    movie: {},
    //tinder(임시)
    randomMovies: [],
    randomMovie: {},
    genres: [],

  },

  getters: {
    movies: state => state.movies,
    movie: state => state.movie,
    randomMovies: state => state.randomMovies,
    genres: state => state.genres,

  },

  mutations: {
    SET_MOVIES: (state, movies) => state.movies = movies,
    SET_MOVIE: (state, movie) => state.movie = movie,
    GET_RANDOM_MOVIES: (state, randomMovies) => state.randomMovies = randomMovies,
    SET_MOVIE_REVIEWS: (state, reviews) => state.movie.reviews = reviews,
  },

  actions: {
    fetchMovies({ commit, getters }) {
      axios({
        url: drf.movies.movies(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_MOVIES', res.data))
        .catch(err => console.error(err.response))
    },

    fetchMovie({ commit, getters }, moviePk) {
      axios({
        url: drf.movies.movie(moviePk),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_MOVIE', res.data))
        .catch(err => {
          console.error(err.response)
          if (err.response.data === 404) {
            router.push({ name: 'NotFound404' })
          }
        })
    },

    getRandomMovies({ commit, getters }) {
      axios({
        method: 'GET',
        url: drf.movies.random(),
        headers: getters.authHeader,
      })
      .then(res => commit('GET_RANDOM_MOVIES', res.data))
      .catch(err => console.error(err.response))
    },

    getRandomMovie({ commit, getters }, moviePk) {
      axios({
        url: drf.movies.movie(moviePk),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_MOVIE', res.data))
        .catch(err => {
          console.error(err.response)
          if (err.response.data === 404) {
            router.push({ name: 'NotFound404' })
          }
        })
    },
    createReview({ commit, getters }, { moviePK, content, vote }) {
      const review = { content, vote }

      axios({
        url: drf.movies.reviews(moviePK),
        method: 'post',
        data: review,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_MOVIE_REVIEWS', res.data)
        })
        .catch(err => console.error(err.response))
    },

    updateReview({ commit, getters }, { moviePk, reviewPk, content }) {
      const review = { content }

      axios({
        url: drf.movies.review(moviePk, reviewPk),
        method: 'put',
        data: review,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_MOVIE_REVIEWS', res.data)
        })
        .catch(err => console.error(err.response))
    },

    deleteReview({ commit, getters }, { moviePk, reviewPk }) {
        if (confirm('정말 삭제하시겠습니까?')) {
          axios({
            url: drf.movies.review(moviePk, reviewPk),
            method: 'delete',
            data: {},
            headers: getters.authHeader,
          })
            .then(res => {
              commit('SET_MOVIE_REVIEWS', res.data)
            })
            .catch(err => console.error(err.response))
        }
    },
  },
}
