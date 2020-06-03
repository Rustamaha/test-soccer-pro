<template lang="pug">
  div.header(:class="{ 'header_open': isOpened }")
    div.header__icon.header__icon_header-icon(@click='open'
      :class="{ 'header__icon_header-icon_open': isOpened }")
      font-awesome-icon(:icon='faChevron')

    MobileSettings.header__settings-position
    div.header__logo
      router-link(to='/')
        img(:src='logo' alt='logo')
    div.header__box-category
      BoxCategories
    div.header__box-cart
      ShoppingCart
    div.header__search
      InputSearch
    div.header__top-links
      TopLinks
    div.header__address
      a
        font-awesome-icon.header__icon.header__icon_phone-icon(:icon='faPhoneAlt')
        span 800-2345-6789
    div.header__social-list
      SocialLinks
    div.header__links
      ul
        li(v-for='link in links')
          router-link.header__link.header__link_nav-link(to='#')
            |{{ link }}
    div.header__footer
      FooterCopyright
</template>

<script>
import {
  faChevronRight,
  faChevronLeft,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

import logo from '@/assets/static/images/logo.png';

import MobileSettings from '@/components/MobileSettings.vue';

import BoxCategories from '@/components/header/BoxCategories.vue';
import InputSearch from '@/components/header/InputSearch.vue';
import TopLinks from '@/components/header/TopLinks.vue';
import SocialLinks from '@/components/header/SocialLinks.vue';

import ShoppingCart from '@/components/ShoppingCart.vue';
import FooterCopyright from '@/components/footer/FooterCopyright.vue';

const links = [
  'about us',
  'delivery information',
  'privacy policy',
  'terms & conditions',
  'contact us',
  'site map',
  'forgotten password',
  'address books',
  'order history',
  'downloads',
  'reward points',
  'returns',
  'transactions',
  'newsletter',
  'recurring payments',
];

export default {
  name: 'HeaderContainer',
  components: {
    MobileSettings,
    BoxCategories,
    InputSearch,
    TopLinks,
    SocialLinks,
    ShoppingCart,
    FooterCopyright,
  },
  data() {
    return {
      isOpened: false,
    };
  },
  created() {
    window.addEventListener('click', this.close);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.close);
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isOpened = false;
        this.openSubcat = false;
      }
    },
    open() {
      this.isOpened = !this.isOpened;
    },
  },
  computed: {
    faChevron() {
      return this.isOpened ? faChevronLeft : faChevronRight;
    },
    faChevronRight() {
      return faChevronRight;
    },
    faPhoneAlt() {
      return faPhoneAlt;
    },
    logo() {
      return logo;
    },
    links() {
      return links;
    },
  },
};
</script>
<style scoped lang="scss">
.header {
  display: none;
}

@media only screen and (min-width: 768px) {
  .header {
    display: block;
    background: $white;
    position: absolute;
    width: 300px;
    height: 100%;
    z-index: 10000;
    left: -300px;
    top: 0;
    bottom: 0;
    -moz-transition: 0.5s all ease;
    -o-transition: 0.5s all ease;
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;

    &_open {
      left: 0;
      box-shadow: 6px 0 12px rgba(0, 0, 0, 0.1);
      -moz-transition: 0.5s all ease;
      -o-transition: 0.5s all ease;
      -webkit-transition: 0.5s all ease;
      transition: 0.5s all ease;
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

      &_phone-icon {
        position: absolute;
        margin: 0;
        bottom: 0;
        left: 0;
        color: $blueColor;
      }

      &_header-icon {
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background: $white;
        position: fixed;
        z-index: 10001;
        top: 0;
        left: 0;
        background: $blueColor;
        color: $white;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.11);
        font-size: 26px;//2.3125rem;
        line-height: 50px;//1.35em;

        &_open {
          left: 300px;
        }
      }
    }

    &__settings-position {
      left: 0;
      top: 0;
      position: relative;
      box-shadow: none;
    }

    &__logo {
      padding-top: 10px;
      text-align: center;
    }

    &__box-category {
      padding: 10px 0;
    }

    &__link {
      margin-top: 1em;
      padding: 0;
      font-weight: 300;
      width: 100%;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      color: $blueBlue;
      text-decoration: none;
      text-transform: uppercase;

      &_nav-link {
        font-size: 14px;
        line-height: 14px;
      }
    }

    &__box-cart {
      margin-top: 10px;
      position: relative;
      background-color: $blueColor;
      padding: 23px 28px;
      color: $white;
    }

    &__search {
      padding-top: 10px;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      background-color: $white;
    }

    &__top-links,
    &__links {
      padding-left: 56px;
    }

    &__top-links {
      padding-top: 10px;
    }

    &__links {
      padding-top: 8px;
    }


    &__address {
      padding-top: 10px;
      padding-left: 33px;
      font-size: 24px;
      line-height: 24px;
      font-weight: 500;
      position: relative;
      margin-left: 28px;
      color: $darkBlue;
    }

    .header__address a {

      &:active,
      &:focus,
      &:hover {
        color: $blueColor;
      }
    }

    &__social-list {
      margin: 10px 0 10px 62px;
    }

    &__footer {
      position: absolute;
      display: block;
      width: 100%;
      bottom: 0;
      padding-bottom: 89px;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

}
</style>
