<template lang="pug">
  div.footer-links
    div.footer-links__box
      h5 information
      ul
        li(v-for='item in information')
          router-link.footer-links__link(to='#') {{ item }}
    div.footer-links__box
      h5 customer service
      ul
        li(v-for='item in customerService')
          router-link.footer-links__link(to='#') {{ item }}
    div.footer-links__box
      h5 extras
      ul
        li(v-for='item in extras')
          router-link.footer-links__link(to='#') {{ item }}
    div.footer-links__box
      h5 my account
      ul
        li(v-for='item in myAccount')
          router-link.footer-links__link(to='#') {{ item }}

</template>

<script>
const information = [
  'about us',
  'delivery information',
  'privacy policy',
  'terms & conditions',
];

const customerService = [
  'contact us',
  'returns',
  'site map',
];

const extras = [
  'brands',
  'gift vouchers',
  'affiliates',
  'specials',
];

const myAccount = [
  'my account',
  'order history',
  'wish list',
  'newsletter',
];

export default {
  name: 'FooterLinks',
  components: {

  },
  computed: {
    information() {
      return information;
    },
    customerService() {
      return customerService;
    },
    extras() {
      return extras;
    },
    myAccount() {
      return myAccount;
    },
  },
};
</script>
<style scoped lang="scss">
.footer-links {
  display: flex;
  display: -webkit-flex;

  &__box {
    width: 25%;
    padding: 0 15px;
  }

  ul {
    padding-top: 31px;
    text-transform: uppercase;
  }

  li + li {
    padding-top: 8px;
  }

  &__link {
    font-size: 14px;
    line-height: 14px;
    text-decoration: none;
    -moz-transition: 0.3s all ease;
    -o-transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    transition: 0.3s all ease;
    color: $blueBlue;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>
