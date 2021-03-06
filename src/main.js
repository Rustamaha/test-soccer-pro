import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faBars,
  faUser,
  faLock,
  faHeart,
  faShoppingCart,
  faShare,
  faInfoCircle,
  faTruck,
  faExclamationCircle,
  faCogs,
  faGlobeAmericas,
  faExchangeAlt,
  faSitemap,
  faTags,
  faGift,
  faUsers,
  faListOl,
  faEnvelope,
  faCertificate,
  faCog,
  faCaretDown,
  faCaretUp,
  faChevronDown,
  faChevronUp,
  faChevronRight,
  faChevronLeft,
  faRandom,
  faSearch,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
} from '@fortawesome/free-brands-svg-icons';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

library.add(
  faBars,
  faUser,
  faLock,
  faHeart,
  faShoppingCart,
  faShare,
  faInfoCircle,
  faTruck,
  faExclamationCircle,
  faCogs,
  faGlobeAmericas,
  faExchangeAlt,
  faSitemap,
  faTags,
  faGift,
  faUsers,
  faListOl,
  faEnvelope,
  faCertificate,
  faCog,
  faCaretDown,
  faChevronDown,
  faChevronUp,
  faChevronRight,
  faChevronLeft,
  faRandom,
  faCaretUp,
  faSearch,
  faPhoneAlt,
  faFacebookF,
  faTwitter,
  faGooglePlusG,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
