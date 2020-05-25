<template lang="pug">
  div.products-container
    div.products-container__heading
      h3 Featured
    div.products-container__row
      template(v-for='product in products')
        ProductCard(:name='product.name'
          :image='product.image'
          :price='product.price'
          :sale='product.sale'
          :oldPrice='product.oldPrice')
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'ProductsContainer',
  components: {
    ProductCard,
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
};
</script>
<style scoped lang="scss">
.products-container {
  padding: 4.375em 0.9375em 0 0.9375em;

  &__heading {
    padding-bottom: 2.25em;
    text-align: center;
  }

  &__row {
  }
}

@media only screen and (min-width: 768px) {

}
</style>
