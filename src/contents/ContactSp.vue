<template>
  <div class="contents-contact">
    <div class="main">
      <p class="mail">fr3020.obe[at]gmail.com</p>
      <p class="text">or</p>
      <p class="icons_twitter">
        <a href="https://twitter.com/js_kym" target="_blank"><img src="../assets/twitter.png"></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contents-contact',
  data () {
    return {
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contents-contact {
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
  .main .mail {
    font-family: 'Play', sans-serif;
    border: 2px solid #ffcd3c;
    border-radius: 10px;
    padding: 10px;
    margin: 15px 10px;
  }
  .main .text {
    font-family: 'Play', sans-serif;
    margin-bottom: 15px;
  }
  .main .icons_twitter {
    position: relative;
    width: 32px;
    height: 32px;
    margin: auto;
    margin-bottom: 15px;
  }
  .main .icons_twitter img {
    position: relative;
    width: 100%;
    width: 100%;
  }
</style>
