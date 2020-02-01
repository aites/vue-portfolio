<template>
  <div class="cardSmall" @click="$emit('open')">
    <CardImage 
      :imageName="cardImage">
    </CardImage>
    <div class="cardSmall__contents">
      <HeadText
        class="cardSmall__titleText"
        :titleText="cardTitle"
      ></HeadText>
      <div class="cardSmall__detail">
        <DetailText :detailText="cardText"></DetailText>
      </div>
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
.cardSmall{
  min-width: 42%;
  flex-basis: 42%;
  border-radius: 4px;
  border: 1px solid #ECECEC;
  margin: 8px;
}
.cardSmall__contents{
  padding: 8px;
}
.cardSmall__titleText{
  margin-bottom: 8px;
}
.cardSmall__detail{
  overflow: hidden;
  width: 100%;
}
</style>