<template lang="pug">
  div.container-custom(id='app')
    HeaderContainer.container-custom__header-position
    TopRow.container-custom__toprow-position
    CategoriesMenu.container-custom__categories-position
    router-view
</template>
<script>
import TopRow from '@/components/TopRow.vue';
import CategoriesMenu from '@/components/CategoriesMenu.vue';
import HeaderContainer from '@/components/header/HeaderContainer.vue';

export default {
  components: {
    HeaderContainer,
    TopRow,
    CategoriesMenu,
  },
};
</script>
<style lang="scss">
@import './assets/styles/main.scss';

.container-custom {

  &__header-position {
    display: none;
  }

  &__categories-position {
    padding: 4.0625em 0.9375em 0.9375em 0.9375em;
  }
}

@media only screen and (min-width: 768px) {
  .container-custom {

    &__header-position {
      display: block;
    }

    &__categories-position,
    &__toprow-position {
      display: none;
    }
  }
}
</style>
