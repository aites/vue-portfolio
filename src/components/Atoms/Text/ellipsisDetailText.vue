<template>
  <p class="ellipsisDetailText">{{ detailText }}</p>
</template>

<script>
export default {
  props: { detailText: String },
};
</script>

<style lang="scss" scoped>
.ellipsisDetailText {
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  // SP画面
  @media all and (max-width: 500px) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  // PC画面
  // @media all and (min-width: 501px) {
  // }
}
</style>
