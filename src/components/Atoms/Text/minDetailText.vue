<template>
  <p class="minDetailText">
    {{detailText}}
  </p>
</template>

<script>
export default {
  props:['detailText'],
}
</script>

<style lang="scss" scoped>
.minDetailText{
  font-size: 10px;
  height: 16px;
  line-height: 16px;
  text-align: left;
}
</style>