<template>
  <p class="detailText">
    {{detailText}}
  </p>
  </template>

  <script>
  export default {
  props:['detailText'],
  data() {
    return{
    }
  },
  }
  </script>

<style lang="scss" scoped>
.detailText{
  font-size: 10px;
  height: 16px;
  line-height: 16px;
  text-align: right;
}
</style>