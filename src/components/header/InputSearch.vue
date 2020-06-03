<template lang="pug">
  div.input-search
    input.input-search__input(type='text' name='search' v-model='search')
    button.input-search__button-search
      font-awesome-icon(:icon='faSearch')
</template>

<script>
import {
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'InputSearch',
  components: {

  },
  data() {
    return {
      search: '',
    };
  },
  computed: {
    faSearch() {
      return faSearch;
    },
  },
};
</script>
<style scoped lang="scss">
.input-search {
  width: 240px;

  &__input {
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
    font-size: 20px;
    background: $white;
    color: $blueBlue;

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
}
</style>
