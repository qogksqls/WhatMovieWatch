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
    fetchMovies({ commit, getters }) {
      axios({
        url: drf.movies.movies(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_MOVIES', res.data))
        .catch(err => console.error(err.response))
    },
  },
}
