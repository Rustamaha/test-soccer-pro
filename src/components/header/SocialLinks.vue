<template lang="pug">
  div.social-links
    ul
      li(v-for='link in socialList')
        router-link.social-links__link(to='#')
          font-awesome-icon(:icon='link')
</template>

<script>
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
} from '@fortawesome/free-brands-svg-icons';

export default {
  name: 'SocialLinks',
  components: {

  },
  computed: {
    socialList() {
      return [
        faFacebookF,
        faTwitter,
        faGooglePlusG,
      ];
    },
  },
};
</script>
<style scoped lang="scss">
.social-links {

  &__link {
    margin-top: 1em;
    padding: 0;
    font-size: 1rem;
    line-height: 1em;
    font-weight: 300;
    width: 100%;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    justify-content: center;
    width: 39px;
    height: 39px;
    margin-left: 8px;
    border-radius: 50%;
    border: 2px solid $brightStar;
    color: $brightStar;

    &:active,
    &:focus,
    &:hover {
      outline: none;
      -moz-transition: 0.3s all ease;
      -o-transition: 0.3s all ease;
      -webkit-transition: 0.3s all ease;
      transition: 0.3s all ease;
      background: $blueColor;
      border: 2px solid $blueColor;
      color: $white;
    }
  }

  ul li  {
    display: inline-block;
  }
}
</style>
