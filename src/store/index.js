import Vue from 'vue'
import Vuex from 'vuex'
import TinyColor from 'tinycolor2'

Vue.use(Vuex)

let tinycolor = require('tinycolor2')

export default new Vuex.Store({
  state: {
    color: "",
    mono: [],
    analogous: []
  },
  mutations: {
    setColor(state, color) {
      state.color = color;
    },
    setMono(state) {
      let mono = tinycolor(`${state.color}`).monochromatic()
      state.mono = mono.map(function (t) { return t.toHexString(); })
    },
    setAnalogous(state) {
      let analogous = tinycolor(`${state.color}`).analogous()
      state.analogous = analogous.map(function (t) { return t.toHexString(); })
    }
  },
  actions: {
  },
  modules: {
  }
})
