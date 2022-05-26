<template>
  <div>
    <img src="@/assets/익명이.png" alt="" style="width: 5rem; height: 5rem;"><h1>{{ profile.username }}</h1>

    <div class="my-articles">
      <h2>작성한 글</h2>
      <ul>
        <li v-for="article in profile.articles" :key="article.pk" style="list-style: none">
          <router-link :to="{ name: 'article', params: { articlePk: article.pk } }">
            {{ article.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="like-it">
      <h2>좋아요 한 글</h2>
      <ul>
        <li v-for="article in profile.like_articles" :key="article.pk" style="list-style: none">
          <router-link :to="{ name: 'article', params: { articlePk: article.pk } }">
            {{ article.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'ProfileView',
  computed: {
    ...mapGetters(['profile'])
  },
  methods: {
    ...mapActions(['fetchProfile'])
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  },
}
</script>

<style scoped>
 *{ font-family: 'Noto Sans KR', sans-serif;}

.my-articles {
  border: 1px black;
}
</style>