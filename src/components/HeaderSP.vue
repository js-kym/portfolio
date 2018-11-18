<template>
  <div class="components-header">
    <header>
      <div class="title">{{$route.name === 'TOP' ? 'Portfolio' : $route.name === 'NotFound' ? '' : $route.name}}</div>
      <div class="iconMenu" :class="{'active': menuOpenFlg}" @click="toggleMenu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <transition>
        <div class="menuWrapper" v-show="menuOpenFlg">
          <menu>
            <ul>
              <li @click="closeMenu"><router-link to="/">TOP</router-link></li>
              <li @click="closeMenu"><router-link to="/profile">Profile</router-link></li>
              <li @click="closeMenu"><router-link to="/skill">Skill</router-link></li>
              <li @click="closeMenu"><router-link to="/product">Product</router-link></li>
              <li @click="closeMenu"><router-link to="/contact">Contact</router-link></li>
            </ul>
          </menu>
        </div>
      </transition>
    </header>
  </div>
</template>

<script>
export default {
  name: 'components-header',
  data () {
    return {
      menuOpenFlg: false
    };
  },
  methods: {
    setLinkColor: function () {
      console.log('setLinkColor');
      const that = this;
      const header = document.getElementsByClassName('components-header')[0];
      const list = header.getElementsByTagName('ul')[0];
      if (list) {
        Object.keys(list.children).forEach(function (index) {
          if (list.children[index].innerText === that.$route.name) {
            list.children[index].style.backgroundColor = '#ff9234';
          } else {
            list.children[index].style.backgroundColor = '#fefed5';
          }
        });
      }
    },
    toggleMenu: function () {
      this.menuOpenFlg = !this.menuOpenFlg;
      if (this.menuOpenFlg) {
        this.setLinkColor();
      }
    },
    closeMenu: function () {
      this.menuOpenFlg = false;
    }
  },
  mounted () {
    this.setLinkColor();
  },
  watch: {
    '$route': 'setLinkColor'
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.components-header {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  /* background-color: rgba(0, 0, 0, 0.8); */
  background-color: #ffcd3c;
}
.components-header header {
  position: relative;
  width: 100%;
  height: 100%;
}
  .components-header header .title {
    height: 100%;
    line-height: 70px;
    font-family: 'Play', sans-serif;
    font-size: 24px;
  }
  .components-header header .iconMenu {
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 22px;
    padding: 24px 20px;
    cursor: pointer;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    transition: 0.3s;
  }
  .components-header header .iconMenu.active {
    background-color: #ff9234;
  }
  .components-header header .iconMenu div {
    width: 100%;
    height: 4px;
    background-color: #000000;
    margin-bottom: 5px;
  }
  .components-header header .iconMenu div:last-child {
    margin-bottom: 0;
  }
  .components-header header .menuWrapper {
    position: relative;
    width: 100%;
    height: calc(100vh - 70px);
    z-index: 100;
    background: rgba(0, 0, 0, 0.5);
  }
  .components-header header .menuWrapper menu {
    padding: 0;
    margin: 0;
    background-color: #fefed5;
  }
  .components-header header .menuWrapper menu ul {
    width: 100%;
    height: 100%;
    /* display: flex; */
    color: #FFA500;
    list-style:none;
    margin: 0;
    padding: 0;
    margin: auto;
  }
  .components-header header .menuWrapper menu li {
    /* width: calc(100% / 5); */
    width: 100%;
    line-height: 70px;
    font-family: 'Play', sans-serif;
    font-size: 20px;
    transition: 0.3s;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
  }
  .components-header header .menuWrapper menu li:hover,
  .components-header header .menuWrapper menu li:active {
    background-color:#ff9234;
  }
  .components-header header .menuWrapper menu li a {
    display: inline-block;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
  .components-header header .menuWrapper menu li a:link {
    color:#000000;
  }
  .components-header header .menuWrapper menu li a:visited {
    color:#000000;
  }
/* animation */
.v-enter-active{
  transition: opacity 0.3s;
}
.v-leave-active {
  transition: opacity 1s;
}
.v-enter-to,
.v-leave, {
  opacity: 1;
}
.v-enter,
.v-leave-to, {
  opacity: 0;
}
</style>
