<template>
  <div class="pages-contact">
    <div v-if="$store.state.width >= 1000">
      <contact/>
    </div>
    <div v-else>
      <contact-sp/>
    </div>
  </div>
</template>

<script>
import Contact from '../contents/Contact.vue';
import ContactSp from '../contents/ContactSp.vue';

export default {
  name: 'pages-contact',
  components: {
    Contact,
    ContactSp
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pages-contact {
  width: 100%;
  height: calc(100vh - 70px - 36px);
}
.pages-contact div {
  width: 100%;
  height: 100%;
}
</style>
