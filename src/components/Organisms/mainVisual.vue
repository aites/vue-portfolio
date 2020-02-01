<template>
  <div class="mainVisual">
    <CardFlameL
      :cardTitle="title"
      :cardImage="image"
      :cardText="text"
    ></CardFlameL>
  </div>
</template>

<script>
import CardFlameL from '../Molecules/card/card_L.vue';
export default {
  components: { CardFlameL },
  props:['image','title','text'],
}
</script>

<style lang="scss" scoped>

</style>

