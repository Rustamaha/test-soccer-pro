<template lang="pug">
  div.top-row
    SwipeControl
    ShoppingCart.top-row__cart-position
    MobileSettingsContainer
</template>

<script>
import SwipeControl from '@/components/SwipeControl.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

import MobileSettingsContainer from '@/components/MobileSettingsContainer.vue';

export default {
  name: 'TopRow',
  components: {
    SwipeControl,
    ShoppingCart,
    MobileSettingsContainer,
  },
};
</script>
<style scoped lang="scss">
.top-row {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  border-bottom: 1px solid $brightStar;
  background: $whiteColor;
  position: fixed;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  top: 0;

  &__cart-position {
    margin-left: auto;
  }
}

@media only screen and (min-width: 768px) {
  .top-row {
    display: none;
  }
}
</style>
