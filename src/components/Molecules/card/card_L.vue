<template>
  <div class="cardL">
    <CardImageL
      :imageName = cardImage
    ></CardImageL>
    <div class="cardContents">
      <TitleText 
        :titleText="cardText">
      </TitleText>
      <DetailText 
        :detailText="cardText">
      </DetailText>
    </div>
  </div>
</template>

<script>
import CardImageL from '../../Atoms/Image/cardImage_L.vue';
import TitleText from '../../Atoms/Text/titleText.vue';
import DetailText from '../../Atoms/Text/detailText.vue';

export default {
  components: { CardImageL,TitleText,DetailText },
  props:['cardText','cardImage'],
}
</script>

<style lang="scss" scoped>
.cardL{
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ECECEC;
}
.cardContents{
  padding: 8px;
}

</style>