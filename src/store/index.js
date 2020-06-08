import Vue from 'vue'
import Vuex from 'vuex'
import TinyColor from 'tinycolor2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color: "",
    mono: []
  },
  mutations: {
    setColor(state, color) {
      state.color = color;
    },
    setMono(state) {
      let tinycolor = require('tinycolor2')
      let mono = tinycolor(`${state.color}`).monochromatic()

      state.mono = mono.map(function (t) { return t.toHexString(); })
    }
  },
  actions: {
  },
  modules: {
  }
})
