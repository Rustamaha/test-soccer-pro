<template lang="pug">
  a.shopping-cart(href='#')
    font-awesome-icon.shopping-cart__icon(:icon='faShoppingCart')
    span.shopping-cart__text
      |0 items
</template>

<script>
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'ShoppingCart',
  components: {

  },
  computed: {
    faShoppingCart() {
      return faShoppingCart;
    },
  },
};
</script>
<style scoped lang="scss">
.shopping-cart {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  text-decoration: none;
  line-height: 1.11em;
  font-size: 2.3rem;
  -moz-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  -webkit-transition: 0.3s all ease;
  transition: 0.3s all ease;
  color: $blueColor;
  margin-left: auto;
  text-transform: uppercase;

  &:hover,
  &:focus,
  &:active {
    color: $darkBlue;
  }

  &__icon {

  }

  &__text {
    font-size: 0.875rem;
  }
}
</style>
