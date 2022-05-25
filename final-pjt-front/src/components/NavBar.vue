<template>
  <nav>
    <ul class="ultag">
      <li class="litag">
        <router-link :to="{ name: 'movies' }" style="color:beige">HOME</router-link>
      </li>
      <li class="litag">
        <router-link :to="{ name: 'articles' }" style="color:beige">영화 정보 게시판</router-link>
      </li>
      <!-- <li class="litag">
        <router-link :to="{ name: 'recommend' }">추천!</router-link>
      </li> -->
      <li class="litag">
        <router-link :to="{ name: 'random' }">랜덤추천!</router-link>
      </li>      
      <li v-if="!isLoggedIn" class="litag">
        <router-link :to="{ name: 'login' }" style="color:beige">Login</router-link>
      </li>
      <li v-if="!isLoggedIn" class="litag">
        <router-link :to="{ name: 'signup' }" style="color:beige">Signup</router-link>
      </li>
      <li v-if="isLoggedIn" class="litag">
        <router-link :to="{ name: 'profile', params: { username } }" style="color:beige">
          my page
        </router-link>
      </li>
      <li v-if="isLoggedIn" class="litag">
        <router-link :to="{ name: 'logout' }" style="color:beige">Logout</router-link>
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

<style>
nav {
  background-color: tomato;
}
.ultag {
  display: flex;
  justify-content: flex-end;
}
.litag {
  margin-left: 20px;
  list-style-type: none;
}
</style>
