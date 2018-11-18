import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    width: 0,
    height: 0
  },
  mutations: {
    resizeWidth: function (state, w) {
      state.width = w;
    },
    resizeHeight: function (state, h) {
      state.height = h;
    }
  }
});
