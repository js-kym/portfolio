<template>
  <div class="pages-profile">
    <div v-if="$store.state.width >= 1000">
      <profile/>
    </div>
    <div v-else>
      <profile-sp/>
    </div>
  </div>
</template>

<script>
import Profile from '../contents/Profile.vue';
import ProfileSp from '../contents/ProfileSp.vue';

export default {
  name: 'pages-profile',
  components: {
    Profile,
    ProfileSp
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pages-profile {
  width: 100%;
  height: auto;
}
@media screen and (min-height: 569px) {
  .pages-profile {
    height: calc(100vh - 70px - 36px);
  }
}
.pages-profile div {
  width: 100%;
  height: 100%;
}
</style>
