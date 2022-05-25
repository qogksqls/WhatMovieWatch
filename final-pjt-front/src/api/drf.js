const HOST = 'http://localhost:8000/'

const VERSION = 'api/v1/'
const ACCOUNTS = 'accounts/'
const ARTICLES = 'articles/'
const COMMENTS = 'comments/'
const MOVIES = 'movies/'
const REVIEWS = 'reviews/'

export default {
  accounts: {
    login: () => HOST + VERSION + ACCOUNTS + 'login/',
    logout: () => HOST + VERSION + ACCOUNTS + 'logout/',
    signup: () => HOST + VERSION + ACCOUNTS + 'signup/',
    // Token 으로 현재 user 판단
    currentUserInfo: () => HOST + VERSION + ACCOUNTS + 'user/',
    // username으로 프로필 제공
    profile: username => HOST + VERSION + ACCOUNTS + 'profile/' + username,
  },
  articles: {
    // /articles/
    articles: () => HOST + VERSION + ARTICLES,
    // /articles/1/
    article: articlePk => HOST + VERSION + ARTICLES + `${articlePk}/`,
    likeArticle: articlePk => HOST + VERSION + ARTICLES + `${articlePk}/` + 'like/',
    comments: articlePk => HOST + VERSION + ARTICLES + `${articlePk}/` + COMMENTS,
    comment: (articlePk, commentPk) =>
      HOST + VERSION + ARTICLES + `${articlePk}/` + COMMENTS + `${commentPk}/`,
  },
  movies: {
    // /movies/
    movies: () => HOST + VERSION + MOVIES,
    movie: moviePk => HOST + VERSION + MOVIES + `${moviePk}/`,
    // /movies/1/ # 영화 평점 => rating
    likeMovie: moviePk => HOST + VERSION + MOVIES + `${moviePk}/` + 'rating/',
    reviews: moviePk => HOST + VERSION + MOVIES + `${moviePk}/` + REVIEWS,
    review: (moviePk, reviewPK) =>
      HOST + VERSION + MOVIES + `${moviePk}/` + REVIEWS + `${reviewPK}/`,
  }
}
