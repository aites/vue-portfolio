<template>
  <div class="profile">
    <Header :headTitle="title"></Header>
    <Modal
      ref="modalEvent"
      :cardTitle="modalTitle"
      :cardText="modalText"
      :cardImage="modalImageData"
    ></Modal>
    <CardL :cardTitle="cardTitle" :cardText="cardText" :cardImage="imageData"></CardL>
    <TitleText class="profile__title" titleText="趣味"></TitleText>
    <ul class="profile__slider">
      <li class="profile__sliderItem" v-for="(card, index) of this.cardData" :key="index">
        <CardS
          :cardTitle="card.title"
          :cardText="card.text"
          :cardImage="card.imageData"
          @open="openModal(card.title, card.text, card.imageData)"
        ></CardS>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from '../../container/Organisms/header.vue';
import CardL from '../../components/Molecules/card/card_L.vue';
import CardS from '../../components/Molecules/card/card_S.vue';
import Modal from '../../container/Organisms/modal.vue';
import TitleText from '../../components/Atoms/Text/titleText.vue';
import profileData from '../../firebase_profile';
const data = new profileData();

export default {
  components: { Header, CardL, CardS, Modal, TitleText },
  props: { headTitle: String },
  data() {
    return {
      title: 'プロフィール',
      cardTitle: '荒木 杏久里',
      cardText: `システムエンジニアを1年半、フロントエンドエンジニアを3年の職務経歴があります。
システムエンジニアでは主に通信系の測定テストを行なっています。
フロントエンドエンジニアでは、主に客先常駐で、お客様先の大規模サイトのエンハンス、リニューアル対応を行なっています。


			【直近の職歴】
			スタディサプリ進路におけるUI / UXデザインのマークアップ対応（客先常駐業務）
【担当業務】
①ディレクション
スケジュール調整
顧客折衝（要件）
デザイン担当・ バックエンド担当への説明
案件変更内容を共有
実装方針の提案・ 相談
gitのレクチャー対応
APIのデータ構造の提案
②実装
PC、 スマホサイトに合わせたマークアップ
運用を考慮した実装
既存ソースから共通モジュールを別ファイルに切り出す
vue.jsでのモジュール化の実装
パフォーマンス改善対応
Lighthouseを使用したパフォーマンス計測
css、 jsのminify化
画像データのlazyloadの実装
既存画面の修正
入力フォーム画面のUIデザイン修正
画面の共通ボタンのデザイン修正
共通カセットの追加対応
検索パネルのデザイン変更、 機能追加
新規画面の作成
カレンダー形式のスケジュール機能の実装
キャンペーンLPのページ作成
サブトップ画面の作成
動画一覧ページの作成
Brightcove動画の再生機能
TikTok風のUIを実装
③ABテスト
既存画面と新パターンに分けて表示する実装（2パターン以上も対応）
Adobe Analyticsでログ集計 / 集計処理を実装
KARTEを用いたABテスト対応
			`,
      imageData: 'top.jpg',
      cardData: data.getData(),
      modalTitle: '',
      modalText: '',
      modalImageData: '',
    };
  },
  methods: {
    openModal(title, text, image) {
      if (window.innerWidth <= 500) {
        this.modalTitle = title;
        this.modalText = text;
        this.modalImageData = image;
        this.$refs.modalEvent.openModal();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.profile__title {
  margin-top: 16px;
}
// SP画面
@media all and (max-width: 500px) {
  .profile__slider {
    display: flex;
    margin-top: 8px;
    overflow: scroll;
    position: relative;
    left: -8px;
    width: 100vw;
  }
  .profile__sliderItem {
    min-width: 42%;
    flex-basis: 42%;
  }
}
// PC画面
@media all and (min-width: 501px) {
  .profile__slider {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .profile__sliderItem {
    min-width: 50%;
    flex-basis: 50%;
  }
}
</style>
