<template lang="pug">
  div.footer-container
    FooterCopyright.footer-container__copyright
    FooterLinks.footer-container__links
</template>

<script>
import FooterCopyright from '@/components/footer/FooterCopyright.vue';
import FooterLinks from '@/components/footer/FooterLinks.vue';

export default {
  name: 'FooterContainer',
  components: {
    FooterCopyright,
    FooterLinks,
  },
};
</script>
<style scoped lang="scss">
.footer-container {
  width: 100%;

  &__links {
    display: none;
  }

  &__copyright {
    text-align: center;
  }
}

@media only screen and (min-width: 768px) {
  .footer-container {
    font-weight: 300;
    width: 96.094%;
    padding: 85px 1.953% 89px 1.953%;
    padding-bottom: 89px;
    margin: 0 auto;

    &__copyright {
      display: none;
    }

    &__links {
      display: flex;
      display: -webkit-flex;
    }
  }
}
</style>
