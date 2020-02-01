<template>
  <div class="cardMiddle">
    <CardImage 
      :imageName="cardImage">
    </CardImage>
    <div class="cardMiddle__contents">
      <TitleText
        class="cardMiddle__titleText"
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
.cardMiddle{
  width: 74%;
  border-radius: 4px;
  border: 1px solid #ECECEC;
}
.cardMiddle__contents{
  padding: 8px;
}
.cardMiddle__titleText{
  margin-bottom: 8px;
}
</style>