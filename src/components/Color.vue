<template>
  <div class="colorDisplay">
    <div class="selectedColor" :style="{ backgroundColor: activeColor}"></div>
    <span>{{activeColor}}</span>
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
.colorDisplay {
  margin: 5px auto;
}
.selectedColor {
  margin: 4px auto;
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
</style>