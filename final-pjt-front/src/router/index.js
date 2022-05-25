import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import ArticleListView from '@/views/community/ArticleListView.vue'
import ArticleDetailView from '@/views/community/ArticleDetailView.vue'
import ArticleNewView from '@/views/community/ArticleNewView'
import ArticleEditView from '@/views/community/ArticleEditView'

import LoginView from '@/views/accounts/LoginView.vue'
import LogoutView from '@/views/accounts/LogoutView.vue'
import SignupView from '@/views/accounts/SignupView.vue'
import ProfileView from '@/views/accounts/ProfileView.vue'
import NotFound404 from '../views/accounts/NotFound404.vue'

import MovieListView from '@/views/movies/MovieListView'
import MovieDetailView from '@/views/movies/MovieDetailView'

import RecommendView from '@/views/movies/RecommendView'
import RandomView from '@/views/movies/RandomView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticleListView
  },
  {
    path: '/articles/new',
    name: 'articleNew',
    component: ArticleNewView
  },
  {
    path: '/articles/:articlePk',
    name: 'article',
    component: ArticleDetailView
  },
  {
    path: '/articles/:articlePk/edit',
    name: 'articleEdit',
    component: ArticleEditView,
  },
  {
    path: '/movies',  // Home
    name: 'movies',
    component: MovieListView,
  },
  {
    path: '/movies/:moviePk',
    name: 'movie',
    component: MovieDetailView,
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: RecommendView,
  },
  {
    path: '/movies/random',
    name: 'random',
    component: RandomView,
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/404'
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  // 이전 페이지에서 발생한 에러메시지 삭제
  store.commit('SET_AUTH_ERROR', null)

  const { isLoggedIn } = store.getters

  const noAuthPages = ['login', 'signup']

  const isAuthRequired = !noAuthPages.includes(to.name)

  if (isAuthRequired && !isLoggedIn) {
    alert('Require Login. Redirecting..')
    next({ name: 'login' })
  } else {
    next()
  }

  if (!isAuthRequired && isLoggedIn) {
    next({ name: 'articles' })
  }
})
export default router
