<template>
  <div class="components-header">
    <header>
      <menu>
        <ul>
          <li><router-link to="/">TOP</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
          <li><router-link to="/skill">Skill</router-link></li>
          <li><router-link to="/product">Product</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </menu>
    </header>
  </div>
</template>

<script>
export default {
  name: 'components-header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  methods: {
    setLinkColor: function () {
      const that = this;
      const header = document.getElementsByClassName('components-header')[0];
      const list = header.getElementsByTagName('ul')[0];
      if (list) {
        Object.keys(list.children).forEach(function (index) {
          if (list.children[index].innerText === that.$route.name) {
            list.children[index].style.backgroundColor = '#ff9234';
          } else {
            list.children[index].style.backgroundColor = '#ffcd3c';
          }
        });
      }
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
menu {
  padding: 0;
  margin: 0;
}
ul {
  width: 1000px;
  height: 100%;
  display: flex;
  color: #FFA500;
  list-style:none;
  margin: 0;
  padding: 0;
  margin: auto;
}
li {
  width: calc(100% / 5);
  line-height: 70px;
  font-family: 'Play', sans-serif;
  font-size: 20px;
  cursor: pointer;
  transition: 0.3s;
}
li:hover {
  background-color:#ff9234;
}
li a {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-decoration: none;
}
li a:link {
  color:#000000;
}
li a:visited {
  color:#000000;
}
</style>
