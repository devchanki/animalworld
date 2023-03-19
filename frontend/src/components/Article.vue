<template>
  <div class="article created">
    <div class="container-btn-delete" v-if="user && user.id == article.author">
      <div class="btn-delete" @click="deleteArticle">
        <img src="../assets/images/close.png" alt="" width="20px">
      </div>
    </div>
    <div class="title">
      {{article.title}}
    </div>
    <div class="contents">
      {{article.content}}
    </div>
    <div class="display-vote-circle">
      <div class="vote-circle">
        <img src="../assets/images/lion.png" height="150px">
        <div class="voted">
          {{article.voteCount ? article.voteCount[0] : 0}}
        </div>
      </div>
      <div class="vote-circle">
        <img src="../assets/images/vulture.png" height="150px">
        <div class="voted">
          {{article.voteCount ? article.voteCount[1] : 0}}
        </div>
      </div>
      <div class="vote-circle">
        <img src="../assets/images/raven.png" height="150px">
        <div class="voted">
          {{article.voteCount ? article.voteCount[2] : 0}}
        </div>
      </div>
      <div class="vote-circle">
        <img src="../assets/images/wolf.png" height="150px">
        <div class="voted">
          {{article.voteCount ? article.voteCount[3] : 0}}
        </div>
      </div>
    </div>
    <div class="container-btn-vote" :style="user == null ? 'display:none' : ''" v-if="user && article.voted.map(el => el._id).indexOf(user.id) != -1">
      <button class="btn-voted">
        참여됨
      </button>
    </div>
    <div class="container-btn-vote" :style="user == null ? 'display:none' : ''" v-else>
      <button class="btn-vote" @click="$emit('vote', index)">
        참여하기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    article: Object,
    user: Object,
    index: Number
  },
  methods: {
    deleteArticle: function () {
      $('.article')[this.index].className += ' removed'
      setTimeout(this.deleteEmit, 900)
    },
    deleteEmit: function () {
      this.$emit('delete', this.index)
    }
  }
}
</script>

<style scoped>
.article{
  position: relative;
  width: 100%;
  padding: 20px 20px 20px 20px;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 5px 5px 20px 0px #000000;
  margin: 0px 0px 20px 0px;
  text-align: justify;
  word-break: break-word;
  overflow: hidden;
}
.title {
  width: 100%;
  text-align: justify;
  font-weight: 700;
  margin-bottom: 10px;
  word-break: break-word;
}
.contents {
  max-height: 500px;
  overflow: auto;
}
.container-btn-delete {
  text-align: right;
  margin-bottom: 5px;
}
.btn-delete {
  display: inline-block;
  cursor: pointer;
}
.voted {
  position: absolute;
  width: 30px;
  height: 30px;
  line-height: 28px;
  font-weight: 600;
  font-size: 18px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  color: white;
  background-color: rgba(64,64,64,0.8);
  opacity: 0;
}
.vote-circle{
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 7px;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: #eddfdb;
  position: relative;
}
.vote-circle > img {
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 100%;
  width: auto;
}
.display-vote-circle{
  text-align: left;
  margin-top: 20px;
  cursor: pointer;
}
.display-vote-circle:hover .voted {
  opacity: 1;
  transition: all .5s;
}
.container-btn-vote {
  margin-top: 20px;
  text-align: right;
}
.btn-vote {
  display: inline-block;
  cursor: pointer;
  background-color: #ffdd00;
  font-weight: 700;
  padding: 10px 15px;
  border-radius: 0.5rem;
  outline: none;
  font-size: 15px;
  box-shadow: none;
  border: none;
}
.btn-voted {
  display: inline-block;
  cursor: pointer;
  background-color: #000;
  color: white;
  font-weight: 700;
  padding: 10px 15px;
  border-radius: 0.5rem;
  outline: none;
  font-size: 15px;
  box-shadow: none;
  border: none;
}
@media(max-width:640px) {
  .btn-vote {
    padding: 15px 20px;
    font-size: 22px;
  }
  .btn-voted {
    padding: 15px 20px;
    font-size: 22px;
  }
  .voted {
    width: 50px;
    height: 50px;
    line-height: 48px;
    font-size: 25px;
  }
  .vote-circle{
    width: 50px;
    height: 50px;
  }
  .display-vote-circle{
    text-align: left;
    margin-top: 30px;
    cursor: pointer;
  }
  .btn-delete img {
    width: 35px;
  }
  .title {
    margin-bottom: 15px;
  }
  .title, .contents {
    font-size: 25px;
  }
}

::-webkit-scrollbar {
  /* border: 1px solid #a15c95; */
  background: #fff;
  border-radius: 0px 0px 5px 0px;
}
::-webkit-scrollbar-thumb {
  width: 3px;
  border: 5px solid #fff;
  border-radius: 15px;
  background: #ddd;
}
</style>
