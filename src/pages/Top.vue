<template>
  <div class="pages-top">
    <div
      v-if="$store.state.width >= 1000"
      class="contents-top-pc">
      <div class="contents-top-pc__main">
        <vue-typer
          :text="['kym\'s Portfolio', 'Frontend Engineer', 'Flasher']"
          :pre-type-delay='70'
          :type-delay='150'
          :erase-delay='100'
          erase-style='clear'
        ></vue-typer>
      </div>
    </div>
    <div
      v-else
      class="contents-top-sp">
      <div class="contents-top-sp__main">
        <div>kym's Portfolio</div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer';

export default {
  name: 'pages-top',
  components: {
    VueTyper
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pages-top {
  width: 100%;
  height: calc(100vh - 70px - 36px);
}
/* PC用 */
.contents-top-pc {
  width: 100%;
  height: 100%;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contents-top-pc__main {
  position: relative;
  width: 1000px;
  text-align: center;
}
.vue-typer {
  font-family: 'Play', sans-serif;
  font-size: 4rem;
}
.vue-typer .custom.char.selected {
  background-color: #ffcd3c;
}
/* SP用 */
.contents-top-sp {
  width: 100%;
  height: 100%;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contents-top-sp__main {
  position: relative;
  width: 100%;
  text-align: center;
  font-family: 'Play', sans-serif;
  font-size: 2rem;
}
</style>
