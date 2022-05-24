import axios from 'axios'
import drf from '@/api/drf'
// import router from '@/router'

// import _ from 'lodash'
// import accounts from './accounts'


export default {
  // namespaced: true,
  state: {
    movies: [],
  },

  getters: {
    movies: state => state.movies,
  },

  mutations: {
    SET_MOVIES: (state, movies) => state.movies = movies,
  },

  actions: {
<<<<<<< HEAD
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
=======
    fetchMovies({ commit, getters }) {
      axios({
        url: drf.movies.movies(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_MOVIES', res.data))
        .catch(err => console.error(err.response))
>>>>>>> 331f60559f73e4e5de3d037f90bf1307c6a251ec
    },
  },
}
