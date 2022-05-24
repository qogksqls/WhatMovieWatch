import axios from 'axios'
import drf from '@/api/drf'
// import router from '@/router'

// import _ from 'lodash'
// import accounts from './accounts'

export default {
  // namespaced: true,
  state: {
    movies: [],
    movie: {},
  },

  getters: {
    movies: state => state.movies,
    // movie: state => state.movie,
  },

  mutations: {
    SET_MOVIES: (state, movies) => state.movies = movies,
    SET_MOVIE: (state, movie) => state.movie = movie,
  },

  actions: {
    // fetchMovies({ commit, getters }) {
    //   axios({
    //     url: drf.movies.movies(),
    //     method: 'get',
    //     headers: getters.authHeader,
    //   })
    //     .then(res => {
    //       commit('SET_MOVIES', res.data)
    //     })
    //     .catch(err => console.error(err.response))
    // },
    fetchMovies({ commit }, token) {
      axios({
        method: 'get',
        url: drf.movies.movies(),
        headers: token,
      })
      .then(res => {
        commit('SET_MOVIES', res.data)
        // commit('GET_MOVIE_TITLES', res.data)
      })
      .catch(err => console.log(err.response))
    },
  },
}
