<template>
  <div class="pages-top">
    <div v-if="$store.state.width >= 1000">
      <top/>
    </div>
    <div v-else>
      <top-sp/>
    </div>
  </div>
</template>

<script>
import Top from '../contents/Top.vue';
import TopSp from '../contents/TopSp.vue';

export default {
  name: 'pages-top',
  components: {
    Top,
    TopSp
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pages-top {
  width: 100%;
  height: calc(100vh - 70px - 36px);
}
.pages-top div {
  width: 100%;
  height: 100%;
}
</style>
