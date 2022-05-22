<template>
  <div>
    <div class="container">
      <h1>영화 정보 게시판</h1>
      <ul v-if="isLoggedIn" class="create-article">
          <router-link :to="{ name: 'articleNew' }">글쓰기</router-link>
      </ul>
    </div>
      <ul>
        <li v-for="article in articles" :key="article.pk" class="article">
          <!-- 글 이동 링크 (제목) -->
          <router-link 
            :to="{ name: 'article', params: {articlePk: article.pk} }">
            <div class="title">
              {{ article.title }}
            </div>
            <div class="content">
              {{ article.content}}
            </div>
            <div class="remainder">
              {{ article.user.username }}
              ------------------
              댓글 수: {{ article.comment_count }} | 좋아요: {{ article.like_count }}
            </div>
          </router-link>
        </li>
      </ul>
   
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'ArticleList',
    computed: {
      ...mapGetters(['articles', 'isLoggedIn'])
    },
    methods: {
      ...mapActions(['fetchArticles'])
    },
    created() {
      this.fetchArticles()
    },
  }
</script>

<style>
.article:hover {
  border: 1px solid gray;
  cursor: pointer;
  background-color: rgb(252, 251, 249);
}
a {
  text-decoration: solid;
}
.title {
  color: black;
}
.content {
  color: gray;
}
.remainder {
  color: black
}
.container {
  display: flex;
  justify-content: space-between;
}
</style>
