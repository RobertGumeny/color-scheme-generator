<template>
  <div class="scheme">
    <div class="circle" :style="{ backgroundColor: colorData}"></div>
    <span>{{colorData}}</span>
  </div>
</template>


<script>
export default {
  name: 'scheme',
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
.scheme {
  margin: 5px auto;
}
.circle {
  margin: 4px auto;
  height: 60px;
  width: 60px;
  border-radius: 50%;
}
</style>