<template>
  <div class="contents-top">
    <div class="main">
      <vue-typer
        :text="[text, 'Frontend Engineer', 'Flasher']"
        :pre-type-delay='70'
        :type-delay='150'
        :erase-delay='100'
        erase-style='clear'
      ></vue-typer>
    </div>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer';

export default {
  name: 'contents-top',
  components: {
    VueTyper
  },
  data () {
    return {
      text: "kym's Portfolio"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contents-top {
  width: 100%;
  height: calc(100vh - 70px - 36px);
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
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
</style>
