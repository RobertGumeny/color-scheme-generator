import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color: ""
  },
  mutations: {
    setColor(state, color) {
      console.log("Store is linked")
      // @ts-ignore
      state.color = "#" + color;
    }
  },
  actions: {
  },
  modules: {
  }
})
