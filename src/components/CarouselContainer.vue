<template lang="pug">
  div.carousel-container
    div
      div.carousel-container__picture-slide(
        :class="{ 'carousel-container__picture-slide_1': img1 }")
        img.carousel-container__img(:src='slide1' alt='slide-1')
      div.carousel-container__picture-slide(
        :class="{ 'carousel-container__picture-slide_2': img2 }")
        img.carousel-container__img(:src='slide2' alt='slide-2')
      div.carousel-container__picture-slide(
        :class="{ 'carousel-container__picture-slide_3': img3 }")
        img.carousel-container__img(:src='slide3' alt='slide-3')
      div.carousel-container__content
        transition(name='overlayer' :duration='1000' mode='out-in')
          div.carousel-container__content-overlayer(v-if='text1' key='text1')
            h2 official jerseys
              br
              span for every country!
          div.carousel-container__content-overlayer(v-if='text2' key='text2')
            h2 Nike Soccer Shoes
              br
              span.carousel-container__text
                span.carousel-container__text_turquoise new
                |  collection
          div.carousel-container__content-overlayer(v-if='text3' key='text3')
            h2 adidas
              br
              span Primeknit 2.0
    div.carousel-container__prev(@click='changeImage(prev)')
      font-awesome-icon.carousel-container__icon(:icon='faChevronLeft')
    div.carousel-container__next(@click='changeImage(next)')
      font-awesome-icon.carousel-container__icon(:icon='faChevronRight')
</template>

<script>
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import slide1 from '@/assets/static/images/slide-1-1748x874.jpg';
import slide2 from '@/assets/static/images/slide-2-1748x874.jpg';
import slide3 from '@/assets/static/images/slide-3-1748x874.jpg';

export default {
  name: 'CarouselContainer',
  components: {

  },
  data() {
    return {
      prev: 'prev',
      next: 'next',
      img1: true,
      img2: false,
      img3: false,
      text1: true,
      text2: false,
      text3: false,
    };
  },
  created() {
    setInterval(() => {
      this.setNextImage();
    }, 8000);
  },
  methods: {
    changeImage(val) {
      if (val === 'next') {
        this.setNextImage();
        return;
      }
      this.setPrevImage();
    },
    setNextImage() {
      if (this.img1) {
        this.img1 = false;
        this.img2 = true;
        this.text1 = false;
        this.text2 = true;
        return;
      }
      if (this.img2) {
        this.img2 = false;
        this.img3 = true;
        this.text2 = false;
        this.text3 = true;
        return;
      }
      this.img3 = false;
      this.img1 = true;
      this.text3 = false;
      this.text1 = true;
    },
    setPrevImage() {
      if (this.img3) {
        this.img3 = false;
        this.img2 = true;
        this.text3 = false;
        this.text2 = true;
        return;
      }
      if (this.img2) {
        this.img2 = false;
        this.img1 = true;
        this.text2 = false;
        this.text1 = true;
        return;
      }
      this.img1 = false;
      this.img3 = true;
      this.text1 = false;
      this.text3 = true;
    },
  },
  computed: {
    slide1() {
      return slide1;
    },
    slide2() {
      return slide2;
    },
    slide3() {
      return slide3;
    },
    faChevronLeft() {
      return faChevronLeft;
    },
    faChevronRight() {
      return faChevronRight;
    },
  },
};
</script>
<style scoped lang="scss">
.carousel-container {
  position: relative;

  &__picture-slide {
    width: 100%;
    height: 100%;
    visibility: visible;
    display: none;

    &_1,
    &_2,
    &_3 {
      display: block;
    }
  }

  &__img {
    visibility: visible;
    margin-top: 0px;
    width: 100%;
    min-height: 300px;
    vertical-align: middle;
    border: 0;
    object-fit: cover;
  }

  &__content {
    width: 100%;
    min-height: 300px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
  }

  &__content-overlayer {
    display: block;
    visibility: visible;
    position: absolute;
    top: 10.6%;
    left: 5%;
    right: 5%;
    text-align: center;
  }

  .overlayer-enter-active,
  .overlayer-leave-active {
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  .overlayer-enter,
  .overlayer-leave,
  .overlayer-leave-to {
    opacity: 0;
  }

  .carousel-container__content-overlayer span {
    margin-top: 7px;
    font-size: 45px;
    line-height: 45px;
  }

  &__text {
    color: $yellow;

    &_turquoise {
      color: $turquoise;
    }
  }

  &__prev,
  &__next {
    display: none;
  }
}
@media only screen and (min-width: 480px) and (max-width: 991px) {
  .carousel-container {
    h2 {
      font-size: 2.4375rem;
      line-height: 1em;
    }

    .carousel-container__content-overlayer span {
      font-size: 3.3125rem;
      line-height: 1em;
    }
  }
}

@media only screen and (min-width: 768px) {
  .carousel-container {

    &__prev,
    &__next {
      display: block;
      position: absolute;
      cursor: pointer;
      top: 51.5%;
      margin-top: -48px;
    }

    &__prev {
      left: 3%;
    }

    &__next {
      right: 3%;
    }

    &__icon {
      font-size: 50px;
      line-height: 50px;
      color: $white;

      &:hover,
      &:focus {
        -moz-transition: 0.3s color ease;
        -o-transition: 0.3s color ease;
        -webkit-transition: 0.3s color ease;
        transition: 0.3s color ease;
        color: $blueColor;
      }
    }
  }
}

@media only screen and (min-width: 992px) {
  .carousel-container {
    h2 {
      font-size: 5rem;
      line-height: 1em;
    }

    .carousel-container__content-overlayer span {
      font-size: 6.875rem;
      line-height: 1em;
    }
  }
}
</style>
