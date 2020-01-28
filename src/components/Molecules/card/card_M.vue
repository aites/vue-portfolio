<template>
  <div class="cardM">
    <CardImage 
      :imageName="cardImage">
    </CardImage>
    <div class="cardContents">
      <TitleText
        class="titleText"
        :titleText="cardTitle"
      ></TitleText>
      <DetailText :detailText="cardText"></DetailText>
    </div>
  </div>
</template>
<script>
import TitleText from '../../Atoms/Text/minHeadText.vue';
import CardImage from '../../Atoms/Image/cardImage_M';
import DetailText from '../../Atoms/Text/detailText.vue';

export default {
  components: { TitleText,CardImage,DetailText },
  props:['cardTitle','cardText','cardImage'],
}
</script>

<style lang="scss" scoped>
.cardM{
  width: 74%;
  border-radius: 4px;
  border: 1px solid #ECECEC;
}
.cardContents{
  padding: 8px;
}
.titleText{
  margin-bottom: 8px;
}
</style>