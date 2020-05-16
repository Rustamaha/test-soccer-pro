<template lang="pug">
  div.swipe-list
    div.swipe-list__links(v-for='link in links')
      router-link.swipe-list__link(to='#')
        font-awesome-icon.swipe-list__icon(:icon='link.icon')
        span
          |{{ link.text }}
</template>

<script>
import {
  faUser,
  faLock,
  faHeart,
  faShoppingCart,
  faShare,
  faInfoCircle,
  faTruck,
  faExclamationCircle,
  faCogs,
  faGlobeAmericas,
  faExchangeAlt,
  faSitemap,
  faTags,
  faGift,
  faUsers,
  faListOl,
  faEnvelope,
  faCertificate,
} from '@fortawesome/free-solid-svg-icons';

const links = [
  {
    icon: faUser,
    text: 'my account',
  },
  {
    icon: faUser,
    text: 'register',
  },
  {
    icon: faLock,
    text: 'login',
  },
  {
    icon: faHeart,
    text: 'wish list (0)',
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
    icon: faInfoCircle,
    text: 'about us',
  },
  {
    icon: faTruck,
    text: 'delivery information',
  },
  {
    icon: faExclamationCircle,
    text: 'privacy policy',
  },
  {
    icon: faCogs,
    text: 'terms & conditions',
  },
  {
    icon: faGlobeAmericas,
    text: 'contact us',
  },
  {
    icon: faExchangeAlt,
    text: 'returns',
  },
  {
    icon: faSitemap,
    text: 'site map',
  },
  {
    icon: faTags,
    text: 'brands',
  },
  {
    icon: faGift,
    text: 'gift vouchers',
  },
  {
    icon: faUsers,
    text: 'affiliates',
  },
  {
    icon: faCertificate,
    text: 'specials',
  },
  {
    icon: faListOl,
    text: 'order history',
  },
  {
    icon: faEnvelope,
    text: 'newsletter',
  },
];
export default {
  name: 'SwipeList',
  components: {

  },
  computed: {
    links() {
      return links;
    },
  },
};
</script>
<style scoped lang="scss">
.swipe-list {
  display: block;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 50px;
  width: 237px;
  //width: 0;
  z-index: 1;
  bottom: 0;
  //left: -237px;
  //left: 0;
  //-moz-transition: 0.3s width ease;
  //-o-transition: 0.3s width ease;
  //-webkit-transition: 0.3s width ease;
  //transition: 0.3s width ease;

  height: 100%;
  overflow-y: scroll;
  text-transform: uppercase;
  box-sizing: border-box;
  font-size: 0.875rem;
  font-weight: 400;
  color: $blueBlue;
  background: $whiteColor;

  &__links {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    width: 220px;
  }

  &__link {
    width: 100%;
    padding: 0.71em 1.42em;
    color: $darkBlue;
    border-top: 1px solid $brightStar;
    line-height: 1.78em;
    background: $whiteColor;
    text-decoration: none;
    box-sizing: border-box;

    &:active,
    &:hover,
    &:focus {
      outline: none;
      color: $whiteColor;
      background: $blueColor;
      -moz-transition: 0.3s all ease;
      -o-transition: 0.3s all ease;
      -webkit-transition: 0.3s all ease;
      transition: 0.3s all ease;
    }

    &:active > .swipe-list__icon,
    &:hover > .swipe-list__icon,
    &:focus > .swipe-list__icon {
      color: $whiteColor;
    }
  }

  &__icon {
    font-size: 1.31rem;
    color: $blueColor;
    margin-right: 9px;
  }
}
</style>
