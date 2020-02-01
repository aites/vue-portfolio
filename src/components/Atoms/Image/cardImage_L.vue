<template>
  <div class="cardLarge">
    <img
      class="cardLarge__image"
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
.cardLarge{
  width: 100%;
}
.cardLarge__image{
  width: 100%;
}
</style>