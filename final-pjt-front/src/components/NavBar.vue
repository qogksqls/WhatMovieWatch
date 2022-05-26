<template>
  <nav>
    <ul class="ultag">
      <li class="litag">
        <router-link :to="{ name: 'movies' }">HOME
          <!-- <img src="@/assets/불독-마스코트-캐릭터.webp" alt="HOME" style="width: 12rem; height: 2rem;"> -->
        </router-link>
      </li>
      <li class="litag">
        <router-link :to="{ name: 'articles' }">영화 정보 게시판</router-link>
      </li>
      <!-- <li class="litag">
        <router-link :to="{ name: 'recommend' }">추천!</router-link>
      </li> -->
      <li class="litag">
        <router-link :to="{ name: 'random' }">추천~!</router-link>
      </li>      
      <li v-if="!isLoggedIn" class="litag">
        <router-link :to="{ name: 'login' }">로그인</router-link>
      </li>
      <li v-if="!isLoggedIn" class="litag">
        <router-link :to="{ name: 'signup' }">회원가입</router-link>
      </li>
      <li v-if="isLoggedIn" class="litag">
        <router-link :to="{ name: 'profile', params: { username } }">
          마이페이지
        </router-link>
      </li>
      <li v-if="isLoggedIn" class="litag">
        <router-link :to="{ name: 'logout' }">로그아웃</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'NavBar',
    computed: {
      ...mapGetters(['isLoggedIn', 'currentUser']),
      username() {
        return this.currentUser.username ? this.currentUser.username : 'guest'
      },
    },
  }
</script>

<style scoped>
 *{ font-family: 'Noto Sans KR', sans-serif;}
 
.ultag {
  background-color: #FFDAB9;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.litag {
  float: left;
  cursor: pointer;
}
.litag a {
  display: block;
  background-color: #FFDAB9;
  color: #000000;
  padding: 8px;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
}
.litag a:hover:not(.current) {
  background-color: #CD853F;
  color: white;
}
</style>
