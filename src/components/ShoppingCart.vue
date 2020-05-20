<template lang="pug">
  div
    a.shopping-cart(href='#'
      @click='open')
      font-awesome-icon.shopping-cart__icon(:icon='faShoppingCart')
      span.shopping-cart__title shopping cart:
      span.shopping-cart__text
        |0 items
        span.shopping-cart__arrow
          font-awesome-icon.shopping-cart__icon.shopping-cart__icon_arrow(:icon='faCaret')
    div.shopping-cart__list(v-if='isOpened  ')
      | Your shopping cart is empty!
</template>

<script>
import {
  faShoppingCart,
  faCaretUp,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'ShoppingCart',
  components: {

  },
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    open() {
      this.isOpened = !this.isOpened;
    },
  },
  computed: {
    faShoppingCart() {
      return faShoppingCart;
    },
    faCaret() {
      return this.isOpened ? faCaretUp : faCaretDown;
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
    line-height: 1.11em;
    font-size: 2.3rem;
  }

  &__text {
    font-size: 0.875rem;
  }

  &__list,
  &__arrow,
  &__title {
    display: none;
  }
}

@media only screen and (min-width: 768px) {
  .shopping-cart {
    color: $white;
    display: block;
    padding-left: 58px;

    &__icon {
      font-size: 2.5rem;
      line-height: 1em;
      position: absolute;
      top: 20px;
      left: 20px;
      vertical-align: middle;
      text-transform: uppercase;
      //text-align: left;
      -moz-transition: .3s color ease;
      -o-transition: .3s color ease;
      -webkit-transition: .3s color ease;
      transition: .3s color ease;

      &_arrow {
        position: static;
        font-size: 1.5625rem;
        line-height: 1em;
      }
    }

    &__title {
      font-size: 1.25rem;
      line-height: 1em;
      font-weight: 400;
      display: block;
      text-transform: uppercase;
    }

    &__text {
      padding-top: 7px;
      font-size: 1rem;
      line-height: 1em;
      font-weight: 300;
      display: flex;
      display: -webkit-flex;
    }

    &__arrow {
      display: block;
      margin-left: auto;
    }

    &__list {
      display: block;
      position: absolute;
      z-index: 1001;
      min-width: 260px;
      padding: 10px 10px 15px;
      text-align: center;
      background: $white;
      color: $blueBlue;
      left: 5%;
      border: 1px solid #ccc;
      /* border-radius: 4px; */
      -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
      box-shadow: 0 6px 12px rgba(0,0,0,.175);
    }

    &:hover,
    &:focus,
    &:active {
      color: $yellow;
    }
  }
}
</style>
