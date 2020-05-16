<template lang="pug">
  div.banners-container
    div.banners-container__box-banner
      img.banners-container__img(:src='banner1' alt='banner-1')
      div.banners-container__desc.banners-container__desc_banner-1
        div
          h2 Adidas
          p Summer "BATTLE" Pack
        router-link.banners-container__link.banners-container__link_banner-1(to='#')
          |shop now!
    div.banners-container__box-banner
      img.banners-container__img(:src='banner2' alt='banner-2')
      div.banners-container__desc.banners-container__desc_banner-2
        h2 Adidas
        p Adipower Predator
          br
          |Revealed
        router-link.banners-container__link.banners-container__link_banner-2(to='#')
          |shop now!
</template>

<script>
import banner1 from '@/assets/static/images/banner1.jpg';
import banner2 from '@/assets/static/images/banner-2-874x874.jpg';

export default {
  name: 'BannersContainer',
  components: {

  },
  computed: {
    banner1() {
      return banner1;
    },
    banner2() {
      return banner2;
    },
  },
};
</script>
<style scoped lang="scss">
.banners-container {

  h2 {
    font-size: 3.25rem;
    line-height: 1em;
    text-transform: none;
    margin: 0;
  }

  &__box-banner {
    position: relative;
  }

  &__desc {
    width: 100%;
    height: 31%;
    position: absolute;

    &_banner-1 {
      right: 0;
      left: 0;
      background: $lightGreen;
      text-align: center;
      top: 69%;
      padding-top: 2%;
    }

    &_banner-2 {
      top: 0;
      position: absolute;
      padding-top: 8.8%;
      padding-left: 9.4%;
      width: 90.6%;
    }
  }

  .banners-container__desc_banner-1 p,
  .banners-container__desc_banner-2 p {
    font-weight: 300;
    margin-top: 15px;
    color: $white;
    font-size: 1.31rem;
    line-height: 1.42em;
    color: $darkBlue;
  }

  .banners-container__desc_banner-1 p {
    color: $white;
  }

  &__img {
    width: 100%;
    display: block;
    height: auto;
  }

  &__link {
    margin: 0;
    text-transform: uppercase;
    font-size: 1.5625rem;
    line-height: 1em;
    font-weight: 700;
    color: $white;
    border-radius: 2px;
    padding: 25px 30px;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.12);
    position: absolute;
    text-decoration: none;

    &:hover,
    &:focus {
      background: $blueColor;
    }
    &_banner-1 {
      bottom: 118%;
      right: 5%;
      background: $redColor;
    }

    &_banner-2 {
      right: 5%;
      bottom: -125%;
      background: #1fc5ef;
    }
  }
}

@media only screen and (min-width: 534px) {
  .banners-container {

    &__link {

      &_banner-1 {
        position: relative;
        bottom: 0;
        height: 25px;
      }
    }

    &__desc {

      &_banner-1 {
        width: 90.7%;
        padding: 5% 0 0 9.3%;
        text-align: left;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
      }
    }

  }
}

@media only screen and (min-width: 768px) {
  .banners-container {
    display: flex;
    display: -webkit-flex;

    &__box-banner {
      width: 50%;
    }

    &__desc {
      height: 26%;

      &_banner-1 {
        display: block;
        text-align: center;
      }
    }

    &__link {

      &_banner-1 {
        bottom: 118%;
        right: 5%;
        position: absolute;
      }

      &_banner-2 {
        bottom: -155%;
      }
    }
  }
}
</style>
