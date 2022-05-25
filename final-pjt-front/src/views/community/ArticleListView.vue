<template>
  <div>
    <h1>영화 정보 게시판</h1>
    <div v-if="isLoggedIn" class="create-article">
      <router-link :to="{ name: 'articleNew' }" placeholder="새 글을" style="color:black">
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
  color: white;
  display: flex;
  justify-content: center;
}
.create-article {
  margin: 30px;
  border: 1px solid black;
}
.article:hover {
  border: 1px solid gray;
  /* border-radius: ; */
  cursor: pointer;
  background-color: rgb(252, 251, 249);
}
a {
  text-decoration: solid;
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
