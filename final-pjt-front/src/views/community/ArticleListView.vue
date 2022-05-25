<template>
  <div>
    <h1>영화 정보 게시판</h1>
    <div v-if="isLoggedIn" class="create-article">
      <router-link :to="{ name: 'articleNew' }" style="color: gray;">
        <p>새 글을 작성해주세요!</p>
      </router-link>
    </div>
    <ul>
      <li v-for="article in articles" :key="article.pk" class="article" style="list-style-type: none;">
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
            <span v-if="article.created_at === article.updated_at">{{ article.created_at.slice(0, 19) }}</span>
            <span v-if="article.created_at !== article.updated_at">{{ article.updated_at.slice(0, 19) }}(수정됨)</span>
            
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
      ...mapGetters(['articles', 'isLoggedIn']),
    },
    methods: {
      ...mapActions(['fetchArticles']),
    },
    created() {
      this.fetchArticles()
    },
  }
</script>

<style>
h1 {
  color: rgb(5, 0, 2);
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.create-article {
  margin-left: 32px;
  margin-right: 32px;
  border: 1px solid rgb(141, 117, 72);
  cursor: pointer;
  height: 2rem;
}
.article {
  border: 1px solid gray;
  cursor: pointer;
  margin-top: 5px;
  margin-right: 32px;
}
.article:hover {
  background-color: rgb(239, 232, 227);
}
a {
  text-decoration: none;
}
.title {
  color: black;
  font-size: large;
}
.content {
  color: gray;
  font-size: small;
}
.remainder {
  color: black;
  font-size: small;
}
</style>
