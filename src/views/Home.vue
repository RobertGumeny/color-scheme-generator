<template>
  <div class="home">
    <h1>Robert's Color Scheme Generator</h1>
    <h3>A simple color scheme generator for Mintbean's CareerHack on 06/08/2020!</h3>
    <p>Click on the color box below to select a color.</p>
    <Input />
    <h3>Selected Color:</h3>
    <Color />
    <h3>Monochromatic Scheme:</h3>
    <div class="displayRow">
      <Scheme v-for="color in monoColors" :colorData="color" :key="color.index" />
    </div>
    <h3>Analogous Scheme:</h3>
    <div class="displayRow">
      <Scheme v-for="color in analogousColors" :colorData="color" :key="color.index" />
    </div>
    <h3>Triad Scheme:</h3>
    <div class="displayRow">
      <Scheme v-for="color in triadColors" :colorData="color" :key="color.index" />
    </div>
  </div>
</template>

<script>
import Input from "../components/Input"
import Color from "../components/Color"
import Scheme from "../components/Scheme"
export default {
  name: 'Home',
  data() {
    return {
    }
  },
  computed: {
    monoColors() {
      return this.$store.state.mono
    },
    analogousColors() {
      return this.$store.state.analogous
    },
    triadColors() {
      return this.$store.state.triad
    }
  },
  methods: {},
  components: {
    Input,
    Color,
    Scheme
  }
}
</script>


<style scoped>
.displayRow {
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
}
</style>