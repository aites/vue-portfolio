<template>
  <div class="cardS" @click="$emit('open')">
    <CardImage 
      :imageName="cardImage">
    </CardImage>
    <div class="cardS__contents">
      <HeadText
        class="cardS__titleText"
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
  min-width: 42%;
  flex-basis: 42%;
  border-radius: 4px;
  border: 1px solid #ECECEC;
  margin: 8px;
}
.cardS__contents{
  padding: 8px;
}
.cardS__titleText{
  margin-bottom: 8px;
}
</style>