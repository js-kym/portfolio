<template>
  <div class="pages-profile">
    <!-- <div v-if="$store.state.width >= 1000">
      <profile/>
    </div>
    <div v-else>
      <profile-sp/>
    </div> -->
    <div class="contents-profile-pc">
      <h1>Profile</h1>
      <div class="contents-profile-pc__main">
        <div class="contents-profile-pc__main__images">
          <div class="contents-profile-pc__main__images__back">
            <img src="../assets/photo.png">
          </div>
        </div>
        <div class="contents-profile-pc__main__info">
          <div class="contents-profile-pc__main__info__name">kym</div>
          <div class="contents-profile-pc__main__info__icons">
            <div class="contents-profile-pc__main__info__icons__twitter">
              <a href="https://twitter.com/js_kym" target="_blank"><img src="../assets/twitter.png"></a>
            </div>
            <div class="contents-profile-pc__main__info__icons__github">
              <a href="https://github.com/js-kym" target="_blank"><img src="../assets/github.png"></a>
            </div>
          </div>
        </div>
        <div class="contents-profile-pc__main__bottom">
          <div>Keyword</div>
          <ul>
            <li v-for="(value, key, index) in descList" @click="setDescription" :key="index">{{key}}</li>
          </ul>
          <div class="contents-profile-pc__main__bottom__description" v-html="description">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pages-profile',
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
      // 説明文を変更
      this.description = this.descList[e.target.innerText];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pages-profile {
  width: 100%;
  height: auto;
}
@media screen and (min-height: 569px) {
  .pages-profile {
    height: calc(100vh - 70px - 36px);
  }
}
/* PC用 */
.contents-profile-pc {
  width: 100%;
  height: 100%;
  color: #000000;
  & h1 {
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
  &__main {
    position: relative;
    width: 1000px;
    text-align: center;
    display: inline-block;
    &__images {
      position: relative;
      width: 160px;
      height: 160px;
      padding-bottom: 10px;
      box-sizing: border-box;
      display: flex;
      margin: auto;
      &__back {
        position: relative;
        width: 140px;
        height: 140px;
        background-color: #ffcd3c;
        border-radius: 100%;
        margin: auto;
        & img {
          width: 128px;
          height: 128px;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: auto;
        }
      }
    }
    &__info {
      position: relative;
      width: 70%;
      /* height: 104px; */
      padding-bottom: 20px;
      box-sizing: border-box;
      margin: auto;
      &__name {
        padding-bottom: 10px;
        font-size: 36px;
        line-height: 36px;
        font-family: 'Play', sans-serif;
      }
      &__icons {
        position: relative;
        width: 100%;
        height: 32px;
        box-sizing: border-box;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        &__twitter,
        &__facebook,
        &__github {
          position: relative;
          width: 32px;
          height: 32px;
          & img {
            position: relative;
            width: 100%;
            width: 100%;
          }
        }
        &__twitter,
        &__facebook {
          margin-right: 10px;
        }
      }
    }
    &__bottom {
      position: relative;
      width: 100%;
      & > div:first-child {
        width: 100px;
        display: inline-block;
        border-bottom: 3px solid #ffcd3c;
        margin-bottom: 15px;
        font-family: 'Play', sans-serif;
        font-size: 1.5rem;
      }
      & ul {
        width: 100%;
        height: 26px;
        display: flex;
        list-style:none;
        margin: 0;
        padding: 0;
        & li {
          width: calc(100% / 4);
          height: 26px;
          line-height: 26px;
          border-radius: 10px;
          background-color: #ffcd3c;
          margin: 0 10px;
          font-family: 'Play', sans-serif;
          cursor: pointer;
          transition: 0.3s;
          &:hover {
            background-color: #ff9234;
          }
        }
      }
      &__description {
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
    }
  }
}
</style>
