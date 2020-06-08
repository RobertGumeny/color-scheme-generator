<template>
  <div class="colorDisplay">
    <div class="selectedColor" :style="{ backgroundColor: activeColor}"></div>
  </div>
</template>


<script>
export default {
  name: 'colorDisplay',
  data() {
    return {
    }
  },
  computed: {
    activeColor() {
      return this.$store.state.color;
    }
  },
  methods: {},
  components: {}
}
</script>


<style scoped>
.selectedColor {
  margin: 10px auto;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>