<template>
  <div class="small">
    <img
      class="small-image"
      alt="画像"
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
.small{
  width: 100%;
}
.small-image{
  width: 100%;
}
</style>