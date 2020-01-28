<template>
  <div class="mainVisual">
    <CardFlameL
      :cardText = title
      :cardImage = image
    ></CardFlameL>
  </div>
</template>

<script>
import CardFlameL from '../Molecules/card/card_L.vue';
export default {
  components: { CardFlameL },
  props:['image'],
  data(){
    return{
      title: 'ポートフォリオ',
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

