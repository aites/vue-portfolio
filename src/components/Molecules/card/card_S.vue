<template>
  <div class="cardSmall" @click="$emit('open')">
    <CardImage :imageName="cardImage"></CardImage>
    <div class="cardSmall__contents">
      <HeadText class="cardSmall__titleText" :titleText="cardTitle"></HeadText>
      <div class="cardSmall__detail">
        <DetailText :detailText="cardText"></DetailText>
      </div>
    </div>
  </div>
</template>

<script>
import HeadText from '../../../components/Atoms/Text/minHeadText.vue';
import CardImage from '../../../components/Atoms/Image/cardImage_S';
import DetailText from '../../../components/Atoms/Text/ellipsisDetailText.vue';

export default {
  components: { HeadText, CardImage, DetailText },
  props: { cardTitle: String, cardText: String, cardImage: String },
};
</script>

<style lang="scss" scoped>
.cardSmall {
  min-width: 42%;
  flex-basis: 42%;
  border-radius: 4px;
  border: 1px solid #ececec;
  margin: 8px;
}
.cardSmall__contents {
  padding: 8px;
}
.cardSmall__titleText {
  margin-bottom: 8px;
}
// SP画面
@media all and (max-width: 500px) {
  .cardSmall__detail {
    overflow: hidden;
    width: 100%;
  }
}
.cardSmall {
  min-width: 42%;
  flex-basis: 42%;
  border-radius: 4px;
  border: 1px solid #ececec;
  margin: 8px;
}
.cardSmall__contents {
  padding: 8px;
}
.cardSmall__titleText {
  margin-bottom: 8px;
}
</style>
