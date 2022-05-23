<template>
  <div>
    <h1>영화 한줄평</h1>
    <ul>
      <li v-for="article in articles" :key="article.pk">
        <!-- 작성자 -->
        {{ article.user.username }} : 

        <!-- 글 이동 링크 (제목) -->
        <router-link 
          :to="{ name: 'article', params: {articlePk: article.pk} }">
          <span>영화 제목 : </span>{{ article.title }}
        </router-link>
          <h4>한줄평 : </h4> {{ article.content }}
        <!-- 댓글 개수/좋아요 개수 -->
        =>
        댓글 수: {{ article.comment_count }} | 좋아요: {{ article.like_count }}

      </li>
    </ul>
   
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'ArticleList',
    computed: {
      ...mapGetters(['articles'])
    },
    methods: {
      ...mapActions(['fetchArticles'])
    },
    created() {
      this.fetchArticles()
    },
  }
</script>

<style></style>
