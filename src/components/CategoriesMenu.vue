<template lang="pug">
  div.categories(:class="{ 'categories_open': !isOpened }")
    div.categories__menu-control(@click='open'
      :class="{ 'categories__menu-control_open': !isOpened }")
      |categories
      font-awesome-icon.categories__arrow(:icon='faChevronDown')
    div.categories__menu(v-if='isOpened')
      div(v-for='category in categories')
        router-link.categories__link(to='#' v-if='typeof category === "string"')
          |{{ category }}
        CategoriesMenuTree(v-else='typeof category === "array"'
          :list='category' :depth='0')
</template>

<script>
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import CategoriesMenuTree from '@/components/CategoriesMenuTree.vue';

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
    'praesent imperdiet',
  ],
  'team',
  'equipment',
  'uniforms',
  'soccer gear',
  'for kids',
  'brand',
];

export default {
  name: 'CategoriesMenu',
  components: {
    CategoriesMenuTree,
  },
  data() {
    return {
      isOpened: true,
    };
  },
  methods: {
    open() {
      this.isOpened = !this.isOpened;
    },
  },
  computed: {
    categories() {
      return categories;
    },
    faChevronDown() {
      return faChevronDown;
    },
  },
};
</script>
<style scoped lang="scss">
.categories {

  border-radius: 2px;
  overflow: hidden;
  text-transform: uppercase;

  &_open {
    -moz-transition: color 0.3s ease;
    -o-transition: color 0.3s ease;
    -webkit-transition: color 0.3s ease;
    transition: color 0.3s ease;
  }

  &__menu-control {
    color: $white;
    cursor: pointer;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.5em;
    padding: 0 0.85em;
    height: 45px;
    background: $blueColor;
    display: flex;
    display: -webkit-flex;
    align-items: center;

    &:hover > .categories__arrow,
    &:focus > .categories__arrow {
      color: $darkBlue;
    }

    &_open > .categories__arrow {
      -moz-transition: color 0.3s ease;
      -o-transition: color 0.3s ease;
      -webkit-transition: color 0.3s ease;
      transition: color 0.3s ease;
      color: $darkBlue;
      transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
    }
  }

  &__arrow {
    text-align: center;
    width: 1.25em;
    font-size: 1.4rem;
    color: $white;
    margin-left: auto;

    &_link {
      color: $darkBlue;
    }
  }

  &__category {
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }

  &__link {
    padding: 0 15px;
    height: 45px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    border-top: 1px solid $gray90;
    color: $darkBlue;
    font-size: 14px;
    background: $whiteColor;
    outline: none;
    text-decoration: none;

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
  }
}
</style>
