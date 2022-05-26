<template>
  <form @submit.prevent="onSubmit" class="comment-list-form">
    <label style="justify-content: between" for="comment"></label>
      <input style="width: 80%; height: 45px; margin-bottom: 5px;" type="text" id="comment" v-model="content" required placeholder=" 댓글을 입력하세요.">
      <button style="margin-left: 10px;" class="test btn btn-outline-primary bt-sm flex-item-gnb">Comment</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListForm',
  data() {
    return {
      content: '',
      created_at: null,
      updated_at: null
    }
  },
  computed: {
    ...mapGetters(['article']),
  },
  methods: {
    ...mapActions(['createComment']),
    onSubmit() {
      this.createComment({
        articlePk: this.article.pk,
        content: this.content,
        created_at: this.created_at,
        updated_at: this.updated_at,
      })
      this.content = ''
    }
  }
}
</script>

<style scoped>
.flex-item-gnb {
  margin-left: auto;
}


@-webkit-keyframes sparkle {
  from {
    background-position: 0% 100%;
  }
  to {
    background-position: 200% 100%;
  }
}

@keyframes sparkle {
  from {
    background-position: 0% 100%;
  }
  to {
    background-position: 200% 100%;
  }
}
.test {
  background: rgb(235, 209, 209);
  display: inline-block;
  padding: 0.5em;
  border-radius: 4px;
  position: relative;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.19);
}
.test:before {
  -webkit-animation: sparkle 4s infinite linear;
          animation: sparkle 4s infinite linear;
  background: linear-gradient(90deg, #7FEFBD 0%, #FFF689 11%, #EC0B43 22%, #7FEFBD 33%, #FFF689 44%, #EC0B43 55%, #7FEFBD 66%, #FFF689 77%, #EC0B43 88%, #7FEFBD 100%);
  background-size: 300% 100%;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 105%;
  height: 105%;
  border-radius: 4px;
  filter: blur(3px);
  z-index: -1;
  transform: scale(0.99) translateY(3px);
}
.test:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.test:hover {

  color: #ffffff;
  opacity: 0.7;
}
</style>