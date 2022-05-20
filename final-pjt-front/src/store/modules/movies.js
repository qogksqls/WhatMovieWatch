// import axios from 'axios'
// import drf from '@/api/drf'
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
    fetchMovies({ commit }) {
      commit("SET_MOVIES")
        // axios ({
        //     url: drf.movies.movies(),
        //     method: 'get',
        //     headers: getters.authHeader,
        // })
        //     .then(res => commit('SET_MOVIES', res.data))
        //     .catch(err => console.error(err.response))
    }
  },
}
