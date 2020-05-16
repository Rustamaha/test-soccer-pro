<template lang="pug">
  div.mobile-settings__content
    div.mobile-settings__box-language
      form
        div.mobile-settings__btn-group(@click='dropdownToggle(idLanguage)')
          span.mobile-settings__dropdown-toggle {{ language }}
            font-awesome-icon.mobile-settings__arrow(:icon='faCaretDown')
          div.mobile-settings__group(:class="{ 'mobile-settings__group_open': isLanguage }")
            button.mobile-settings__btn(v-for='item in languageList'
              @click.prevent='setLanguage(item)')
              |{{ item }}
    div.mobile-settings__box-currency
      form
        div.mobile-settings__btn-group(@click='dropdownToggle(idCurrency)')
          span.mobile-settings__dropdown-toggle {{ decoder(currency) }}
            font-awesome-icon.mobile-settings__arrow(:icon='faCaretDown')
          div.mobile-settings__group(:class="{ 'mobile-settings__group_open': isCurrency }")
            button.mobile-settings__btn(v-for='item in currencyList'
              @click.prevent='setCurrency(item)')
              |{{ decoder(item) }}
</template>

<script>
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'MobileSettings',
  components: {
  },
  data() {
    return {
      idLanguage: 'language',
      idCurrency: 'currency',
      isOpened: false,
      isLanguage: false,
      isCurrency: false,
      language: 'English',
      currency: '&#36; US Dollar',
    };
  },
  created() {
    window.addEventListener('click', this.close);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.close);
  },
  methods: {
    decoder(str) {
      const textArea = document.createElement('textarea');
      textArea.innerHTML = str;
      return textArea.value;
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isOpened = false;
      }
    },
    open() {
      this.isOpened = !this.isOpened;
    },
    dropdownToggle(id) {
      if (id === 'language') {
        this.isLanguage = !this.isLanguage;
        this.isCurrency = false;
      } else {
        this.isLanguage = false;
        this.isCurrency = !this.isCurrency;
      }
    },
    setLanguage(val) {
      this.language = val;
    },
    setCurrency(val) {
      this.currency = val;
    },
  },
  computed: {
    faCaretDown() {
      return faCaretDown;
    },
    languageList() {
      return ['English', 'Deutsch', 'Русский'];
    },
    currencyList() {
      return ['&euro; Euro', '&#163; Pound Sterling', '&#36; US Dollar'];
    },
  },
};
</script>
<style scoped lang="scss">
.mobile-settings {

  &__content {
    position: fixed;
    top: 55px;
    right: -2px;
    width: 300px;
    box-shadow: 0 0 13px 2px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    color: $blueBlue;
    background: $whiteColor;
    display: flex;
    //z-index: 1;
  }

  &__box-language {
    width: 50%;
    background: $whiteColor;
    border-radius: 2px;
  }

  &__box-currency {
    border-left: 1px solid $brightStar;
    width: 50%;
    background: $whiteColor;
    border-radius: 2px;
  }

  &__btn-group {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    border-radius: 2px;
    -moz-transition: 0.3s all ease;
    -o-transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    transition: 0.3s all ease;

    &:hover,
    &:active {
      color: $blueColor;
    }
  }

  &__dropdown-toggle {
    border-radius: 2px;
    display: block;
    font-size: 0.875rem;
    line-height: 3.57em;
    cursor: pointer;
    padding-left: 18px;
    //-moz-transition: 0.3s all ease;
    //-o-transition: 0.3s all ease;
    //-webkit-transition: 0.3s all ease;
    //transition: 0.3s all ease;
    height: 50px;
    background: $whiteColor;
  }

  &__arrow {
    display: block;
    font-size: 29px;
    color: $aluminiumColor;
    position: absolute;
    right: 3px;
    top: 7px;
  }

  &__group {
    left: auto;
    right: auto;
    border-radius: 2px;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    display: none;
    min-width: 160px;
    height: 96px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 0.875rem;
    background-color: $white;
    border: 1px solid rgba(0,0,0,.15);
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    background-clip: padding-box;

    &_open {
      display: block;
    }
  }

  &__btn {
    text-align: left;
    display: block;
    padding: 5px 5px 5px 10px;
    width: 100%;
    height: 32px;
    border: none;
    font-size: 13px;
    text-transform: capitalize;
    color: #282e36;
    font-size: 0.8125rem;
    color: $darkBlue;
    background: none;
    cursor: pointer;

    &:active,
    &:hover,
    &:focus {
      outline: none;
      color: $whiteColor;
      background: $blueColor;
      -moz-transition: 0.3s all ease;
      -o-transition: 0.3s all ease;
      -webkit-transition: 0.3s all ease;
      transition: 0.3s all ease;
    }
  }
}
</style>
