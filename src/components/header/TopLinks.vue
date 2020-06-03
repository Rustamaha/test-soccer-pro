<template lang="pug">
  div
    template(v-for='link in topLinks')
      router-link.top-links(to='#')
        font-awesome-icon.top-links__icon(:icon='link.icon')
        span {{ link.text }}
</template>

<script>
import {
  faUser,
  faHeart,
  faShare,
  faLock,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const topLinks = [
  {
    icon: faHeart,
    text: 'wish list (0)',
  },
  {
    icon: faUser,
    text: 'my account',
  },
  {
    icon: faShoppingCart,
    text: 'shopping cart',
  },
  {
    icon: faShare,
    text: 'checkout',
  },
  {
    icon: faLock,
    text: 'login',
  },
  {
    icon: faUser,
    text: 'register',
  },
];

export default {
  name: 'topLinks',
  components: {

  },
  computed: {
    topLinks() {
      return topLinks;
    },
  },
};
</script>
<style scoped lang="scss">
.top-links {
  margin-top: 1em;
  padding: 0;
  font-size: 1rem;
  line-height: 1em;
  font-weight: 300;
  width: 100%;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  color: $blueBlue;
  text-decoration: none;
  text-transform: uppercase;

  &::first-child {
    margin: 0;
  }

  &:active,
  &:focus,
  &:hover {
    outline: none;
    -moz-transition: 0.3s all ease;
    -o-transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    transition: 0.3s all ease;
    color: $blueColor;
  }

  &:active > .header__icon,
  &:focus > .header__icon,
  &:hover > .header__icon {
    color: $blueColor;
  }

  &__icon {
    font-size: 1.6875rem;
    line-height: 1em;
    margin-right: 1em;
    color: $aluminiumColor;
    -moz-transition: 0.5s all ease;
    -o-transition: 0.5s all ease;
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
    cursor: pointer;
  }
}
</style>
