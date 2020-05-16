<template lang="pug">
  div.tree-menu
    div.tree-menu__menu-control(@click='open'
      :class="{ 'tree-menu__menu-control_open': !isOpened }")
      |{{ list[0] }}
      font-awesome-icon.tree-menu__arrow(:icon='faChevron')
    div(v-for='category in list.slice(1)' v-if='isOpened')
      router-link.tree-menu__link(to='#' v-if='typeof category === "string"'
        :style='indent')
        |{{ category }}
      CategoriesMenuTree(v-else='typeof category === "object"'
        :list='category' :depth='depth + 1')
</template>

<script>
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'CategoriesMenuTree',
  props: ['list', 'depth'],
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
  components: {
    faChevronDown,
  },
  computed: {
    faChevron() {
      return this.isOpened ? faChevronUp : faChevronDown;
    },
    indent() {
      if (this.depth === 0) {
        return {
          'padding-left': '15px',
        };
      }
      return {
        'padding-left': `${this.depth * 45}px`,
      };
    },
  },
};
</script>
<style scoped lang="scss">
.tree-menu {

  &__menu-control {
    padding: 0 15px;
    display: block;
    border-top: 1px solid $gray90;
    color: $darkBlue;
    font-size: 0.875rem;
    height: 45px;
    background: $whiteColor;
    outline: none;
    text-decoration: none;
    cursor: pointer;

    display: flex;
    display: -webkit-flex;
    align-items: center;

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

    &_open > .tree-menu__arrow {
      -moz-transition: color 0.3s ease;
      -o-transition: color 0.3s ease;
      -webkit-transition: color 0.3s ease;
      transition: color 0.3s ease;
      color: $darkBlue;
    }
  }

  &__arrow {
    text-align: center;
    width: 1.25em;
    font-size: 1.05rem;
    margin-left: auto;
    color: $darkBlue;
  }

  &__link {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    padding: 0 15px;
    height: 45px;
    border-top: 1px solid $gray90;
    color: $darkBlue;
    font-size: 0.875rem;
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
