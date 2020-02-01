<template>
  <h2 class="titleText">
    {{titleText}}
  </h2>
</template>

<script>
export default {
  props:['titleText'],
}
</script>

<style lang="scss" scoped>
.titleText{
  font-size: 16px;
  height: 24px;
  line-height: 24px;
  text-align: left;
}
</style>