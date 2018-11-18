<template>
  <div class="contents-notfound">
    <div class="main">
      <p class="title">Page's NotFound</p>
      <p class="text"><router-link to="/">Go to TOP</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contents-notfound',
  data () {
    return {
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contents-notfound {
  width: 100%;
  height: calc(100vh - 70px - 36px);
  color: #000000;
}
.main {
  position: relative;
  width: 100%;
  text-align: center;
  display: inline-block;
  /* margin-top: 50px; */
}
  .main p {
    margin: 0;
  }
  .main .title {
    font-family: 'Play', sans-serif;
    padding: 10px;
    margin: 15px 10px;
  }
  .main .text {
    font-family: 'Play', sans-serif;
    margin-bottom: 15px;
  }
</style>
