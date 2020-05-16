import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const product10 = require('@/assets/static/images/product-10-270x270.png');
const product13 = require('@/assets/static/images/product-13-270x270.png');
const product19 = require('@/assets/static/images/product-19-270x270.png');
const product25 = require('@/assets/static/images/product-25-270x270.png');
const product37 = require('@/assets/static/images/product-37-270x270.png');
const product46 = require('@/assets/static/images/product-46-270x270.png');
const product52 = require('@/assets/static/images/product-52-270x270.png');

export default new Vuex.Store({
  state: {
    products: [
      {
        image: product10,
        name: 'Aenean viverra',
        price: 100,
        oldPrice: null,
        sale: false,
      },
      {
        image: product13,
        name: 'Aliquam dolor tellus',
        price: 150,
        oldPrice: 200,
        sale: true,
      },
      {
        image: product13,
        name: 'Aliquam dolor tellus',
        price: 125,
        oldPrice: 200,
        sale: true,
      },
      {
        image: product19,
        name: 'Aliquam eget',
        price: 80,
        oldPrice: 100,
        sale: true,
      },
      {
        image: product25,
        name: 'Consectetur adipiscing',
        price: 60,
        oldPrice: 100,
        sale: true,
      },
      {
        image: product37,
        name: 'Dolor sit amet',
        price: 80,
        oldPrice: 100,
        sale: true,
      },
      {
        image: product46,
        name: 'Phasellus vel scelerisque',
        price: 150,
        oldPrice: 200,
        sale: true,
      },
      {
        image: product52,
        name: 'Praesent imperdiet',
        price: 150,
        oldPrice: null,
        sale: false,
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
});
