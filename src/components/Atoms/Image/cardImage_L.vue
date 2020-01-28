<template>
  <div class="large">
    <img
      class="large-image"
      alt="メインビジュアル"
      :src = "require('../../../assets/' + imageName)"
      slot="cover"
    />
  </div>
</template>

<script>
export default {
  props:['imageName'],
}
</script>

<style lang="scss" scoped>
.large{
  width: 100%;
}
.large-image{
  width: 100%;
}
</style>