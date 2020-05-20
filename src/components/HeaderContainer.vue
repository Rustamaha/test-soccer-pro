<template lang="pug">
  div.header
    div.header__icon-open(@click='open'
      :class="{ 'header__icon-open_open': isOpened }")
      font-awesome-icon(:icon='faChevron')
    transition(name='header')
      div.header__list(v-if='isOpened')
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
              font-awesome-icon.header__icon(:icon='faChevronRight')
              div.header__subcategories(v-if='openSubcat')
                div.header__subcategory(v-for='subcateg in category.slice(1)')
                  template(v-for='link in subcateg')
                    router-link.header__sublink(to='#') {{ link }}
        div.header__box-cart
          ShoppingCart
        div.header__search

</template>

<script>
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import logo from '@/assets/static/images/logo.png';
import MobileSettings from '@/components/MobileSettings.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

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
  },
  data() {
    return {
      isOpened: false,
      openSubcat: false,
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
    logo() {
      return logo;
    },
    categories() {
      return categories;
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
    //width: auto;
    //height: auto;
    z-index: 10000;
    left: 0;
    top: 0;
    bottom: 0;
    box-shadow: 6px 0 12px rgba(0, 0, 0, 0.1);

    &__icon-open {
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
      cursor: pointer;
      background: $blueColor;
      color: $white;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.11);
      font-size: 26px;//2.3125rem;
      line-height: 50px;//1.35em;
      -moz-transition: 0.5s all ease;
      -o-transition: 0.5s all ease;
      -webkit-transition: 0.5s all ease;
      transition: 0.5s all ease;

      &_open {
        left: 300px;
      }
    }

    &__list {
    display: inline-block;
    width: 300px;
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

    &__icon {
      float: right;
    }

    &__sublink,
    &__link {
      text-transform: uppercase;
      display: block;
      color: $blueBlue;
      text-decoration: none;
    }

    &__link {
      font-size: 20px;
      line-height: 20px;
      padding: 13px 50px 12px 59px;
      margin-bottom: 5px;

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
    }

    &__subcategories {
      position: absolute;
      left: 100%;
      top: 25%;
      //opacity: 1;
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

    &__sublink {
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

    &__box-cart {
      margin-top: 10px;
      position: relative;
      background-color: $blueColor;
      padding: 23px 28px;
      color: $white;
    }

    .header-enter-active,
    .header-leave-active {
      -moz-transition: 0.5s all ease;
      -o-transition: 0.5s all ease;
      -webkit-transition: 0.5s all ease;
      transition: 0.5s all ease;
  }

  .header-enter,
  .header-leave-to {
    left: -300px;
  }
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {

}
</style>
