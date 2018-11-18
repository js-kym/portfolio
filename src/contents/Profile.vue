<template>
  <div class="contents-profile">
    <h1>Profile</h1>
    <div class="main">
      <div class="images">
        <div class="images_back">
          <img src="../assets/photo.png">
        </div>
      </div>
      <div class="info">
        <div class="name">kym</div>
        <div class="icons">
          <div class="icons_twitter">
            <a href="https://twitter.com/js_kym" target="_blank"><img src="../assets/twitter.png"></a>
          </div>
          <div class="icons_github">
            <a href="https://github.com/js-kym" target="_blank"><img src="../assets/github.png"></a>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div>Keyword</div>
        <ul>
          <li v-for="(value, key, index) in descList" @click="setDescription" :key="index">{{key}}</li>
        </ul>
        <div class="description" v-html="description">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contents-profile',
  data () {
    return {
      description: 'keywordに関する説明が表示されます',
      descList: {
        'Flash': '5年ほどFlashでのタイムラインアニメーション作成の仕事をしていました。HTML5でもガラケー向けでも作れます。',
        'JavaScript': 'FlashでHTML5のソースを提供しているうちに、JavaScriptの面白さに気づき、フロントエンドエンジニアに転職しました。',
        'Policy': 'より多くの人に「楽しい」を届けること。<br>楽しい、面白い、ワクワクするようなモノづくりを心がけています。',
        'Like': 'ゲーム、アニメ、漫画が好きです。最近は特撮モノにハマっています。ゲームは任天堂が好き。'
      }
    };
  },
  methods: {
    setDescription: function (e) {
      console.log(e.target.innerText);
      // ほかのリストの背景色をもとにもどす
      Object.keys(e.target.parentNode.children).forEach(function (index) {
        e.target.parentNode.children[index].style.backgroundColor = '#ffcd3c';
      });
      // 背景色を変更
      e.target.style.backgroundColor = '#ff9234';
      // 説明文領域も背景色変更
      // document.getElementsByClassName('description')[0].style.backgroundColor = '#ff9234';
      // 説明文を変更
      this.description = this.descList[e.target.innerText];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contents-profile {
  width: 100%;
  height: 100%;
  color: #000000;
}
h1 {
  position: relative;
  width: 120px;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  padding-top: 10px;
  margin-bottom: 15px;
  font-family: 'Play', sans-serif;
  border-bottom: 5px solid #ff9234;
}
.main {
  position: relative;
  width: 1000px;
  text-align: center;
  display: inline-block;
  /* margin-top: 50px; */
}
  .images {
    position: relative;
    width: 160px;
    height: 160px;
    padding-bottom: 10px;
    box-sizing: border-box;
    display: flex;
    margin: auto;
  }
  .images .images_back {
    position: relative;
    width: 140px;
    height: 140px;
    background-color: #ffcd3c;
    border-radius: 100%;
    margin: auto;
  }
  .images img {
    width: 128px;
    height: 128px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .info {
    position: relative;
    width: 70%;
    /* height: 104px; */
    padding-bottom: 20px;
    box-sizing: border-box;
    margin: auto;
  }
    .info .name {
      padding-bottom: 10px;
      font-size: 36px;
      line-height: 36px;
      font-family: 'Play', sans-serif;
    }
    .info .icons {
      position: relative;
      width: 100%;
      height: 32px;
      box-sizing: border-box;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .info .icons .icons_twitter,
    .info .icons .icons_facebook,
    .info .icons .icons_github {
      position: relative;
      width: 32px;
      height: 32px;
    }
    .info .icons .icons_twitter,
    .info .icons .icons_facebook {
      margin-right: 10px;
    }
    .info .icons .icons_twitter img,
    .info .icons .icons_facebook img,
    .info .icons .icons_github img {
      position: relative;
      width: 100%;
      width: 100%;
    }
  .main .bottom {
    position: relative;
    width: 100%;
  }
    .main .bottom > div:first-child {
      width: 100px;
      display: inline-block;
      border-bottom: 3px solid #ffcd3c;
      margin-bottom: 15px;
      font-family: 'Play', sans-serif;
      font-size: 1.5rem;
    }
    .main .bottom ul {
      width: 100%;
      height: 26px;
      display: flex;
      list-style:none;
      margin: 0;
      padding: 0;
    }
    .main .bottom ul li {
      width: calc(100% / 4);
      height: 26px;
      line-height: 26px;
      border-radius: 10px;
      background-color: #ffcd3c;
      margin: 0 10px;
      font-family: 'Play', sans-serif;
      cursor: pointer;
      transition: 0.3s;
    }
    .main .bottom ul li:hover {
      background-color: #ff9234;
    }
    .main .bottom .description {
      width: calc(100% - 20px);
      height: 65px;
      margin: 10px;
      padding: 10px 15px;
      /* border: 1px solid #FFA500; */
      border-radius: 10px;
      background-color: #ffcd3c;
      text-align: left;
      box-sizing: border-box;
      /* line-height: 50px; */
    }
</style>
