<template>
  <div id="app">
    <div id="main">
      <div class="main-header">
        <div v-if="$store.state.width >= 1000">
          <components-header/>
        </div>
        <div v-else>
          <components-header-sp/>
        </div>
      </div>
      <div class="main-wrapper">
        <div class="main-pages">
            <router-view/>
        </div>
        <div class="main-footer">
          <components-footer/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentsHeader from './components/Header.vue';
import ComponentsHeaderSp from './components/HeaderSp.vue';
import ComponentsFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    ComponentsHeader,
    ComponentsHeaderSp,
    ComponentsFooter
  },
  data () {
    return {
    };
  },
  methods: {
    handleResize: function () {
      this.$store.commit('resizeWidth', window.innerWidth);
      this.$store.commit('resizeHeight', window.innerHeight);
    }
  },
  created: function () {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Play:700);
html,
body {
  /* overflow: hidden; */
  margin: 0;
  padding: 0;
  border: none;
  color: #000000;
  background-color: #fefed5;
  font-size: 16px;
  /* width: 100%;
  height: 100%; */
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
#app {
  font-family: 'メイリオ','Hiragino Kaku Gothic Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.main-wrapper {
  width: 100%;
  height: calc(100% - 70px);
}
.main-wrapper::-webkit-scrollbar {
  display: none;
}
.main-pages {
  position: relative;
  width: 100%;
}
.main-footer {
  position: relative;
  width: 100%;
  height: 36px;
}
.main-header {
  position: relative;
  width: 100%;
  height: 70px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.7s;
}
.v-enter,
.v-leave-to {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.v-enter-to,
.v-leave {
  opacity: 1;
}
</style>
