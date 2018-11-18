<template>
  <div class="contents-product">
    <h1>Product</h1>
    <div class="main">
      <div class="product" v-for="(sValue, sKey, sIndex) in data" :key="sIndex">
        <div>{{sKey}}</div>
        <div class="info">
          <div class="info_left">
            <div class="image"><img :src="sValue.image"></div>
          </div>
          <div class="info_right">
            <div v-if="sValue.explain" class="explain" v-html="sValue.explain"></div>
            <div v-if="sValue.link" class="link">
              <a :href="sValue.link" target="_blank">{{sValue.siteName}}</a>
            </div>
            <div v-if="sValue.githubLink" class="github_link">
              <a :href="sValue.githubLink" target="_blank">
                <img src="../assets/github.png">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contents-product',
  data () {
    return {
      data: {
        'Portfolio': {
          'image': require('../assets/portfolio.png'),
          'explain': 'このポートフォリオページです。<br>見やすさ、わかりやすさを意識してデザイン・開発しました。',
          'link': '',
          'siteName': '',
          'githubLink': 'https://github.com/js-kym/portfolio'
        },
        'new-event-check': {
          'image': require('../assets/new-event-check.png'),
          'explain': 'connpassのAPIを使用し、新着イベントを確認できるサイトです。<br>気になったものをブックマークすることができます。',
          'link': 'https://distracted-williams-9cf61e.netlify.com/',
          'siteName': '新着イベントSearch',
          'githubLink': 'https://github.com/js-kym/new-event-check'
        }
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contents-product {
  width: 100%;
  height: calc(100vh - 70px - 36px);
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
}
  .main .product {
    border: 2px solid #ffcd3c;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 15px;
  }
  .main .product > div:first-child {
    /* width: 100px; */
    padding: 0 10px;
    display: inline-block;
    border-bottom: 3px solid #ffcd3c;
    margin-bottom: 10px;
    font-family: 'Play', sans-serif;
    font-size: 1.5rem;
  }
  .main .product .info {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
    .main .product .info .info_left {
      border: 2px solid #000000;
      width: 300px;
      max-height: 200px;
      overflow: hidden;
      margin: 10px;
    }
    .main .product .info .info_left img {
      width: 100%;
      height: 100%;
    }
    .main .product .info .info_right {
      width: 500px;
      height: 200px;
      margin: 10px;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
      .main .product .info .info_right div {
        margin-bottom: 10px;
      }
      .main .product .info .info_right div:last-child {
        margin-bottom: 0;
      }
      .main .product .info .info_right .github_link {
        width: 32px;
        height: 32px;
      }
      .main .product .info .info_right .github_link img {
        width: 100%;
        height: 100%;
        margin-bottom: 10px;
      }

</style>
