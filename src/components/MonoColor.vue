<template>
  <div class="monoColor">
    <div class="circle" :style="{ backgroundColor: colorData}"></div>
    <span>{{colorData}}</span>
  </div>
</template>


<script>
export default {
  name: 'monoColor',
  props: ["colorData"],
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {},
  components: {}
}
</script>


<style scoped>
.monoColor {
  margin: 5px auto;
}
.colorDisplay {
  margin: 4px auto;
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
</style>