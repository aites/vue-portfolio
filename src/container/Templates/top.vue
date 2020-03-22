<template>
  <div class="top">
    <Header :headTitle="title"></Header>
    <p class="top__text">{{ text }}</p>
    <p class="top__text">左上のメニューから各項目に遷移できます。</p>
    <div class="top__image">
      <MainVisual :image="imageData"></MainVisual>
    </div>
  </div>
</template>

<script>
import Header from '../../container/Organisms/header.vue';
import MainVisual from '../../container/Organisms/mainVisual.vue';

export default {
  components: { Header, MainVisual },
  data() {
    return {
      title: 'ポートフォリオサイト',
      imageData: 'top.jpg',
      text:
        '荒木杏久里のポートフォリオサイトです。プロフィールとフロントエンドエンジニアとして携わったプロジェクトが閲覧できます。',
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
}
.top__image {
  margin-top: 8px;
}
.top__text {
  text-align: left;
  margin-top: 8px;
  font-size: 12px;
  line-height: 1.3;
  @media all and (min-width: 501px) {
    font-size: 16px;
  }
}
</style>
