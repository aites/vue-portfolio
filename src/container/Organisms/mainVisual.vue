<template>
  <div class="mainVisual">
    <CardImageL
      :imageName="image"
    ></CardImageL>
  </div>
</template>

<script>
import CardImageL from '../../components/Atoms/Image/cardImage_L.vue';
export default {
  components: { CardImageL },
  props:['image','text'],
}
</script>

<style lang="scss" scoped>

</style>

