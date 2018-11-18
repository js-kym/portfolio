<template>
  <div class="pages-notfound">
    <not-found/>
  </div>
</template>

<script>
import NotFound from '../contents/NotFound.vue';

export default {
  name: 'pages-notfound',
  components: {
    NotFound
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pages-notfound {
  width: 100%;
  height: calc(100vh - 70px - 36px);
}
.pages-notfound div {
  width: 100%;
  height: 100%;
}
</style>
