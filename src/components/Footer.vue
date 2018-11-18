<template>
  <div class="components-footer">
    <footer>
      <div v-html="copyright"></div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'components-footer',
  data () {
    return {
      copyright: '&copy; 2018 kym'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.components-footer {
  width: 100%;
  height: 36px;
  position: absolute;
  bottom: 0;
  background-color: #ffcd3c;
  font-size: 16px;
  line-height: 36px;
  font-family: 'Play', sans-serif;
}
</style>
