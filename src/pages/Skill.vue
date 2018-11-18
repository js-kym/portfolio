<template>
  <div class="pages-skill">
    <div v-if="$store.state.width >= 1000">
      <skill/>
    </div>
    <div v-else>
      <skill-sp/>
    </div>
  </div>
</template>

<script>
import Skill from '../contents/Skill.vue';
import SkillSp from '../contents/SkillSp.vue';

export default {
  name: 'pages-skill',
  components: {
    Skill,
    SkillSp
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pages-skill {
  width: 100%;
}
.pages-skill div {
  width: 100%;
  height: 100%;
}
</style>
