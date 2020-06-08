<template>
  <div class="home">
    <h1>Robert's Color Scheme Generator</h1>
    <h3>A simple color scheme generator for Mintbean's CareerHack on 06/08/2020!</h3>
    <Input />
    <Color />
  </div>
</template>

<script>
import Input from "../components/Input"
import Color from "../components/Color"
export default {
  name: 'Home',
  data() {
    return {

    }
  },
  computed: {},
  methods: {},
  components: {
    Input,
    Color
  }
}
</script>


<style scoped>
</style>