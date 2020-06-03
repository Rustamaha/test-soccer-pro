<template lang="pug">
  div.product-card
    div.product-card__quick-info
    div.product-card__sale(:class="{ 'product-card__sale_true': sale }")
      |Sale
    div
      a.product-card__quick-view(href='#')
        |Quick View
      img.product-card__img(:src='image' alt='name')
    div.product-card__caption
      span.product-card__price {{ decoder(price) }}
      span.product-card__price(v-show='oldPrice'
          :class="{ 'product-card__price_old': oldPrice }")
          |{{ decoder(oldPrice) }}
      div.product-card__name
        |{{ name }}
    div.product-card__cart-button
      button.product-card__btn-add
        font-awesome-icon.product-card__icon(:icon='faShoppingCart')
        span|  add to cart
      div.product-card__btn-wrap
        button.product-card__btn(data-toggle='tooltip'
          data-placement='bottom'
          data-original-title='Add to Wish List')
          font-awesome-icon(:icon='faHeart')
        button.product-card__btn(data-toggle='tooltip'
          data-placement='bottom'
          data-original-title='Compare this Product')
          font-awesome-icon(:icon='faRandom')
</template>

<script>
import {
  faShoppingCart,
  faHeart,
  faRandom,
} from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'ProductCard',
  props: ['name', 'image', 'price', 'sale', 'oldPrice'],
  components: {

  },
  methods: {
    decoder(val) {
      const textArea = document.createElement('textarea');
      textArea.innerHTML = `&#36;${val}.00&nbsp;`;
      return textArea.value;
    },
  },
  computed: {
    faShoppingCart() {
      return faShoppingCart;
    },
    faHeart() {
      return faHeart;
    },
    faRandom() {
      return faRandom;
    },
  },
};
</script>
<style scoped lang="scss">
.product-card {
  width: 100%;
  position: relative;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid;
  border-color: transparent;
  border-radius: 2px;
  text-align: center;

  &:hover,
  &:focus {
    border-color: $brightStar;
    -moz-transition: 0.3s all ease;
    -o-transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    transition: 0.3s all ease;
  }

  &:hover > .product-card__cart-button .product-card__btn-wrap,
  &:focus > .product-card__cart-button .product-card__btn-wrap {
    opacity: 1;
  }

  &__quick-view,
  &__quick-info {
    display: none;
  }

  &__sale {
    font-size: 0.875rem;
    line-height: 1em;
    display: none;
    position: absolute;
    text-transform: uppercase;
    top: 9px;
    left: 9px;
    background-color: $redColor;
    color: $white;
    padding: 4px 8px;

    &_true {
      display: block;
    }
  }

  &__caption {
    padding-top: 0.25em;
  }

  &__price {
    display: inline-block;
    font-size: 1.25rem;
    line-height: 1em;
    color: $blueColor;

    &_old {
      display: inline-block;
      font-weight: 300;
      text-decoration: line-through;
      vertical-align: bottom;
      font-size: 1rem;
      line-height: 1em;
      color: $blueBlue;
    }
  }

  &__name {
    font-size: 1rem;
    line-height: 1.5625em;
    font-weight: 300;
    color: $darkBlue;
  }

  &__cart-button {
    padding-top: 1.625em;
  }

  &__btn,
  &__btn-add {
    text-transform: uppercase;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.12);
    font-size: 1rem;
    line-height: 1em;
    border-style: none;
    font-weight: 500;
  }

  &__btn-add {
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    border-radius: 2px;
    background-color: $blueColor;
    padding: 0.6875em 1.3125em;
    color: $white;
  }

  .product-card__btn-add span {
    font-weight: 500;
    padding-left: 0.375em;
  }

  &__icon {
    font-size: 1.75rem;
    line-height: 1em;
  }

  &__btn-wrap {
    display: block;
    text-align: center;
    padding: 0.9375em 0;
    opacity: 0;
  }

  &__btn {
    padding: 0;
    background-color: $white;
    color: $blueColor;
    font-size: 1.5625rem;
    line-height: 1em;
  }

  &__btn:last-child {
    margin-left: 1.875em;
  }
}

@media only screen and (min-width: 540px) {
  .product-card {
    width: 50%;
  }
}

@media only screen and (min-width: 768px) {
  .product-card {
    width: 25%;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 30px;

    &__img {
      width: 100%;
      height: auto;
    }

    &__btn-add {
      font-size: 11px;
      line-height: 11px;
    }

    &__icon {
      font-size: 1.3rem;
      line-height: 1em;
    }
  }
}
</style>
