<template>
  <div class="pages-product">
    <div v-if="$store.state.width >= 1000">
      <product/>
    </div>
    <div v-else>
      <product-sp/>
    </div>
  </div>
</template>

<script>
import Product from '../contents/Product.vue';
import ProductSp from '../contents/ProductSp.vue';

export default {
  name: 'pages-product',
  components: {
    Product,
    ProductSp
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pages-product {
  width: 100%;
  height: auto;
}
@media screen and (min-width: 1000px) {
  .pages-product {
    height: calc(100vh - 70px - 36px);
  }
}
.pages-product div {
  width: 100%;
  height: 100%;
}
</style>
