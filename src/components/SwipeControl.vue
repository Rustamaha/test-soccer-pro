<template lang="pug">
  div.swipe
    a.swipe__control(@click='open'
      href='#')
      font-awesome-icon(:icon='faBars')
    transition(name='swipe')
      SwipeList(v-if='isOpened')
</template>

<script>
import { faBars } from '@fortawesome/free-solid-svg-icons';

import SwipeList from '@/components/SwipeList.vue';

export default {
  name: 'SwipeControl',
  components: {
    SwipeList,
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
      }
    },
    open() {
      this.isOpened = !this.isOpened;
    },
  },
  computed: {
    faBars() {
      return faBars;
    },
  },
};
</script>
<style scoped lang="scss">
.swipe {
  border-right: 1px solid $brightStar;

  &__control {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    width: 63px;
    height: 100%;
    text-decoration: none;
    line-height: 1.11em;
    font-size: 2.3rem;
    -moz-transition: 0.3s all ease;
    -o-transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    transition: 0.3s all ease;
    color: $blueColor;

    &:hover,
    &:focus,
    &:active {
      color: $darkBlue;
    }
  }

  .swipe-enter-active,
  .swipe-leave-active {
    -moz-transition: 0.5s all ease;
    -o-transition: 0.5s all ease;
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
  }

  .swipe-enter,
  .swipe-leave-to {
    left: -237px;
  }
}
</style>
