<template>
  <div class="middle">
    <img
      class="middle-image"
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
.middle{
  width: 100%;
}
.middle-image{
  width: 100%;
}
</style>