<template>
  <div class="cardS" @click="$emit('open')">
    <CardImage 
      :imageName="cardImage">
    </CardImage>
    <div class="cardContents">
      <HeadText
        class="titleText"
        :titleText="cardTitle"
      ></HeadText>
      <DetailText :detailText="cardText"></DetailText>
    </div>
  </div>
</template>

<script>
import HeadText from '../../Atoms/Text/minHeadText.vue';
import CardImage from '../../Atoms/Image/cardImage_S';
import DetailText from '../../Atoms/Text/detailText.vue';

export default {
  components: { HeadText,CardImage,DetailText },
  props:['cardTitle','cardText','cardImage'],
}
</script>

<style lang="scss" scoped>
.cardS{
  width: 42%;
  border-radius: 4px;
  border: 1px solid #ECECEC;
  flex: 1 0 auto;
  margin: 8px;
}
.cardContents{
  padding: 8px;
}
.titleText{
  margin-bottom: 8px;
}
</style>