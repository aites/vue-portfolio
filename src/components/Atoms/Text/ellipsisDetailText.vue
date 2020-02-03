<template>
  <p class="ellipsisDetailText">
    {{detailText}}
  </p>
</template>

<script>
export default {
  props:['detailText'],
}
</script>

<style lang="scss" scoped>
.ellipsisDetailText{
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>