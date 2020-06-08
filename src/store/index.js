import Vue from 'vue'
import Vuex from 'vuex'
import ColorScheme from 'color-scheme'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color: "",
  },
  mutations: {
    setColor(state, color) {
      // @ts-ignore
      state.color = color;
    },
  },
  actions: {
  },
  modules: {
  }
})
