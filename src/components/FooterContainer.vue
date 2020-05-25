<template lang="pug">
  div.footer-container
    FooterCopyright
</template>

<script>
import FooterCopyright from '@/components/FooterCopyright.vue';

export default {
  name: 'FooterContainer',
  components: {
    FooterCopyright,
  },
};
</script>
<style scoped lang="scss">
.footer-container {

  &__copyright {
    text-align: center;
    //-moz-transform: none;
    //-ms-transform: none;
    //-o-transform: none;
    //-webkit-transform: none;
    //transform: none;
    //position: static;
  }
}
</style>
