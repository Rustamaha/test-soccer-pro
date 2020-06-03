<template lang="pug">
  div
    template(v-for='category in categories')
      router-link.box-categories__link(v-if='typeof category === "string"' to='#')
        |{{ category }}
      div.box-categories__link(v-else='typeof category === "array"'
        @click='openSubcategory')
        |{{ category[0] }}
        font-awesome-icon.box-categories__icon(:icon='faChevronRight')
        div.box-categories__subcategories(v-if='openSubcat')
          div.box-categories__subcategory(v-for='subcateg in category.slice(1)')
            template(v-for='link in subcateg')
              router-link.box-categories__link.box-categories__link_sublink(to='#') {{ link }}
</template>
<script>
import {
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

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
  name: 'BoxCategories',
  components: {
  },
  data() {
    return {
      openSubcat: false,
    };
  },
  methods: {
    openSubcategory() {
      this.openSubcat = !this.openSubcat;
    },
  },
  computed: {
    faChevronRight() {
      return faChevronRight;
    },
    categories() {
      return categories;
    },
  },
};
</script>
<style scoped lang="scss">
.box-categories {

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
    float: right;
  }
}
</style>
