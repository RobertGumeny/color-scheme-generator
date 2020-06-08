<template>
  <div class="home">
    <h1>Robert's Color Scheme Generator</h1>
    <h3>A simple color scheme generator for Mintbean's CareerHack on 06/08/2020!</h3>
    <Input />
    <h4>Selected Color:</h4>
    <Color />
    <h4>Monochromatic Scheme:</h4>
    <div class="monoDisplay">
      <MonoColor v-for="color in colors" :colorData="color" :key="color.index" />
    </div>
  </div>
</template>

<script>
import Input from "../components/Input"
import Color from "../components/Color"
import MonoColor from "../components/MonoColor"
export default {
  name: 'Home',
  data() {
    return {
    }
  },
  computed: {
    colors() {
      return this.$store.state.mono
    }
  },
  methods: {},
  components: {
    Input,
    Color,
    MonoColor
  }
}
</script>


<style scoped>
.monoDisplay {
  display: flex;
  justify-content: center;
}
</style>