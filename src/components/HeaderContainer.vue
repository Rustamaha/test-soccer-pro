<template lang="pug">
  div.header(:class="{ 'header_open': isOpened }")
    div.header__icon.header__icon_header-icon(@click='open'
      :class="{ 'header__icon_header-icon_open': isOpened }")
      font-awesome-icon(:icon='faChevron')
    div.header__list
      MobileSettings.header__settings-position
      div.header__logo
        router-link(to='/')
          img(:src='logo' alt='logo')
      div.header__box-category
        template(v-for='category in categories')
          router-link.header__link(v-if='typeof category === "string"' to='#')
            |{{ category }}
          div.header__link(v-else='typeof category === "array"'
            @click='openSubcategory')
            |{{ category[0] }}
            font-awesome-icon.header__icon.header__icon_category-icon(:icon='faChevronRight')
            div.header__subcategories(v-if='openSubcat')
              div.header__subcategory(v-for='subcateg in category.slice(1)')
                template(v-for='link in subcateg')
                  router-link.header__link.header__link_sublink(to='#') {{ link }}
      div.header__box-cart
        ShoppingCart
      div.header__search
        input.header__input-search(type='text' name='search' v-model='search')
        button.header__button-search
          font-awesome-icon(:icon='faSearch')
      div.header__top-links
        template(v-for='link in topLinks')
          router-link.header__link.header__link_top-link(to='#')
            font-awesome-icon.header__icon(:icon='link.icon')
            span
              |{{ link.text }}
      div.header__address
        a
          font-awesome-icon.header__icon.header__icon_phone-icon(:icon='faPhoneAlt')
          span 800-2345-6789
      div.header__social-list
        ul
          li(v-for='link in socialList')
            router-link.header__link.header__link_social-link(to='#')
              font-awesome-icon(:icon='link')
      div.header__links
        ul
          li(v-for='link in links')
            router-link.header__link.header__link_nav-link(to='#')
              |{{ link }}
      FooterCopyright.header__copyright-position
</template>

<script>
import {
  faChevronRight,
  faChevronLeft,
  faSearch,
  faUser,
  faHeart,
  faShare,
  faLock,
  faShoppingCart,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
} from '@fortawesome/free-brands-svg-icons';

import logo from '@/assets/static/images/logo.png';

import MobileSettings from '@/components/MobileSettings.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import FooterCopyright from '@/components/FooterCopyright.vue';

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

const categories = [
  'shoes',
  [
    'apparel',
    [
      'nullam iaculis',
      'conse ctetur adipisicing',
      'elit sed do eiusmod',
      'et dolore magna aliqua',
      'incididunt ut labore',
    ],
    [
      'phasellus vel',
      'conse ctetur adipisicing',
      'elit sed do eiusmod',
      'et dolore magna aliqua',
      'incididunt ut labore',
    ],
    [
      'praesent imperdiet',
    ],
  ],
  'team',
  'equipment',
  'uniforms',
  'soccer gear',
  'for kids',
  'brand',
];

export default {
  name: 'HeaderContainer',
  components: {
    MobileSettings,
    ShoppingCart,
    FooterCopyright,
  },
  data() {
    return {
      isOpened: false,
      openSubcat: false,
      search: '',
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
    openSubcategory() {
      this.openSubcat = !this.openSubcat;
    },
  },
  computed: {
    faChevron() {
      return this.isOpened ? faChevronLeft : faChevronRight;
    },
    faChevronRight() {
      return faChevronRight;
    },
    faSearch() {
      return faSearch;
    },
    faPhoneAlt() {
      return faPhoneAlt;
    },
    socialList() {
      return [
        faFacebookF,
        faTwitter,
        faGooglePlusG,
      ];
    },
    logo() {
      return logo;
    },
    categories() {
      return categories;
    },
    topLinks() {
      return topLinks;
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
    position: absolute;
    width: 300px;
    height: 100%;
    z-index: 10000;
    left: -300px;
    top: 0;
    bottom: 0;
    box-shadow: 6px 0 12px rgba(0, 0, 0, 0.1);
    -moz-transition: 0.5s all ease;
    -o-transition: 0.5s all ease;
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;

    &_open {
      left: 0;
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

      &_category-icon {
        float: right;
      }
    }

    &__list {
      display: block;
      background: $white;
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
      font-size: 20px;
      line-height: 20px;
      padding: 13px 50px 12px 59px;
      margin-bottom: 5px;
      text-transform: uppercase;
      display: block;
      color: $blueBlue;
      text-decoration: none;

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

      &_sublink {
        padding: 12px 10px;
        font-size: 1rem;
        line-height: 1em;
        font-weight: 300;

        &:active,
        &:focus,
        &:hover {
        outline: none;
          -moz-transition: 0.3s all ease;
          -o-transition: 0.3s all ease;
          -webkit-transition: 0.3s all ease;
          transition: 0.3s all ease;
          background: $blueColor;
          color: $white;
        }
      }

      &_top-link {
        margin-top: 1em;
        padding: 0;
        font-size: 1rem;
        line-height: 1em;
        font-weight: 300;
        width: 100%;
        display: flex;
        display: -webkit-flex;
        align-items: center;

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
      }

      &_social-link {
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: center;
        width: 39px;
        height: 39px;
        margin-left: 8px;
        padding: 0;
        border-radius: 50%;
        border: 2px solid $brightStar;
        color: $brightStar;

        &:active,
        &:focus,
        &:hover {
        outline: none;
          -moz-transition: 0.3s all ease;
          -o-transition: 0.3s all ease;
          -webkit-transition: 0.3s all ease;
          transition: 0.3s all ease;
          background: $blueColor;
          border: 2px solid $blueColor;
          color: $white;
        }
      }

      &_nav-link {
        font-size: 14px;
        line-height: 14px;
      }
    }

    &__subcategories {
      position: absolute;
      left: 100%;
      top: 25%;
      visibility: visible;
      width: 455px;
      padding: 10px 0 10px 10px;
      background: $whiteColor;
      z-index: -1;
      display: inline-block;
      -webkit-transition: all .6s ease 0s;
      -moz-transition: all .6s ease 0s;
      -o-transition: all .6s ease 0s;
      transition: all .6s ease 0s;
      overflow: hidden;
    }

    &__subcategory {
      float: left;
      width: 33%;
      position: relative;
      padding: 1px 0px;
      border-right: 1px solid $brightStar;
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
      width: 240px;
      margin-left: auto;
      margin-right: auto;
      background-color: white;
    }

    &__input-search {
      color: $blueColor;
      display: block;
      margin: 0;
      font-size: 18px;
      line-height: 24px;
      width: 100%;
      height: 50px;
      background: $whiteColor;
      border: 1px solid $gray85;
    }

    &__button-search {
      border: none;
      display: inline-block;
      padding: 0;
      outline: none;
      outline-offset: 0;
      cursor: pointer;
      -webkit-appearance: none;
      -moz-transition: .3s all ease;
      -o-transition: .3s all ease;
      -webkit-transition: .3s all ease;
      transition: .3s all ease;
      position: absolute;
      top: 24px;
      right: 16px;
      color: $blueColor;
      font-size: 20px;
      background: $whiteColor;
    }

    &__top-links {
      padding-top: 10px;
      padding-left: 56px;
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

    .header__social-list ul li  {
      display: inline-block;
    }

    &__links {
      padding-top: 8px;
    }

    &__copyright-position {
      position: relative;
      bottom: 0;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

}
</style>
