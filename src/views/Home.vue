<template lang="pug">
  div.home
    CarouselContainer
    BannersContainer
    ProductsContainer
    FooterContainer
</template>

<script>
import CarouselContainer from '@/components/CarouselContainer.vue';
import BannersContainer from '@/components/BannersContainer.vue';
import ProductsContainer from '@/components/ProductsContainer.vue';

import FooterContainer from '@/components/footer/FooterContainer.vue';

export default {
  name: 'Home',
  components: {
    CarouselContainer,
    BannersContainer,
    ProductsContainer,
    FooterContainer,
  },
};
</script>
<style scoped lang="scss">
.home {
  position: static;
}
</style>
