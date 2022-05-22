<template>
  <nav>
    <ul class="ultag">
      <li class="litag">
        <router-link :to="{ name: 'movies' }">HOME</router-link>
      </li>
      <li class="litag">
        <router-link :to="{ name: 'articles' }">영화 정보 게시판</router-link>
      </li>

      <li v-if="!isLoggedIn" class="litag">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li v-if="!isLoggedIn" class="litag">
        <router-link :to="{ name: 'signup' }">Signup</router-link>
      </li>
      <li v-if="isLoggedIn" class="litag">
        <router-link :to="{ name: 'profile', params: { username } }">
          {{ currentUser.username }}'s page
        </router-link>
      </li>
      <li v-if="isLoggedIn" class="litag">
        <router-link :to="{ name: 'logout' }">Logout</router-link>
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
.ultag {
  display: flex;
  justify-content: flex-end;
}
.litag {
  margin-left: 20px;
  list-style-type: none;
}
</style>
