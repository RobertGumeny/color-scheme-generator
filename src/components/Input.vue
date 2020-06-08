<template>
  <div class="colorInput">
    <form @submit.prevent="createScheme()">
      <label for="color">Color:</label>
      <input type="color" name="color" required v-model="newColor" />
      <button class="btn" type="submit">Generate!</button>
      <button class="btn" @click="randomColor()">Random!</button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'colorInput',
  data() {
    return {
      newColor: '#888888'
    }
  },
  computed: {},
  methods: {
    createScheme() {
      this.$store.dispatch("setColor", this.newColor)
    },
    randomColor() {
      let tinycolor = require('tinycolor2')
      let randomColor = tinycolor.random()
      console.log(randomColor)
      this.newColor = randomColor.toHexString()
      this.$store.dispatch("setColor", this.newColor)
    }
  },
  components: {}
}
</script>


<style scoped>
form {
  display: flex;
  align-items: center;
  justify-content: center;
}
form label {
  margin-right: 2px;
}
.btn {
  cursor: pointer;
  border: 0;
  padding: 5px 10px;
  background: #888888;
  color: #f1f1f1;
  border-radius: 5px;
  margin-right: 5px;
}
.btn:focus {
  outline: 0;
}
input[type="color"] {
  cursor: pointer;
  background-color: #222222;
  width: 25px;
  height: 30px;
  padding: 0px;
  border: 1px;
  margin-right: 2px;
}
</style>