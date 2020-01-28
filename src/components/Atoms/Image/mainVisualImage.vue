<template>
  <div class="mainVisual">
    <img
      class="mainVisual-image"
      alt=""
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
.mainVisual{
  width: 100%;
}
.mainVisual-image{
  width: 100%;
}
</style>