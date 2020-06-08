<template>
  <div class="colorInput">
    <form @submit.prevent="createScheme()">
      <label for="color">Color:</label>
      <input type="text" name="color" required v-model="newColor" placeholder="FFFFFF" />
      <button type="submit">Generate!</button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'colorInput',
  data() {
    return {
      newColor: ''
    }
  },
  computed: {},
  methods: {
    createScheme() {
      console.log(this.newColor)
      this.$store.commit("setColor", this.newColor)
      this.newColor = ''
    }
  },
  components: {}
}
</script>


<style scoped>
</style>