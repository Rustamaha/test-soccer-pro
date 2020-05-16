<template lang="pug">
  div.mobile-control
    a.mobile-control__control(@click='open'
      href='#')
      font-awesome-icon(:icon='faCog')
    transition(name='open')
      MobileSettings(v-if='isOpened')
</template>

<script>
import { faCog } from '@fortawesome/free-solid-svg-icons';

import MobileSettings from '@/components/MobileSettings.vue';

export default {
  name: 'MobileSettingsContainer',
  components: {
    MobileSettings,
  },
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
  computed: {
    faCog() {
      return faCog;
    },
  },
};
</script>
<style scoped lang="scss">
.mobile-control {
  padding-right: 10px;

  &__control {
    display: block;
    text-decoration: none;
    line-height: 2.11em;
    font-size: 1.625rem;
    width: 50px;
    height: 50px;
    text-align: center;
    color: $blueColor;
  }

  .open-enter-active,
  .open-leave-active {
    -moz-transition: 0.3s all ease;
    -o-transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    transition: 0.3s all ease;
  }

  .open-enter,
  .open-leave-to {
    top: 0;
    height: 0;
  }
}
</style>
