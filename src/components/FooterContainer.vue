<template lang="pug">
  div.footer-container
    div.footer-container__copyright
      |Powered by OpenCart
      br
      |Soccer Pro © 2020
</template>

<script>

export default {
  name: 'FooterContainer',
  components: {

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
