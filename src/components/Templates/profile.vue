<template>
  <div class="profile">
    <Header
      :headTitle = title
    ></Header>
    <Modal
      ref="modalEvent"
      :cardTitle = this.title
      :cardText = this.text
      :cardImage = this.imageData
    ></Modal>
    <Card
      :cardTitle = this.title
      :cardText = this.text
      :cardImage = this.imageData
    ></Card>
    <div class="slider">
      <CardS v-for="(card,index) of this.cardData" :key="index"
        :cardTitle="card.title"
        :cardText="card.text"
        :cardImage="card.imageData"
        @open="openModal"
      ></CardS>
    </div>
    <div class="magin"></div>
  </div>
</template>

<script>
import Header from '../Organisms/header.vue';
import Card from '../Molecules/card/card_L.vue';
import CardS from '../Molecules/card/card_S.vue';
import Modal from '../Organisms/modal.vue';

export default {
  components: { Header,Card,CardS,Modal },
  props:['headTitle'],
  data(){
    return{
      title: 'プロフィール',
      text: 'プロフィールのテキスト',
      imageData: 'project_1_pc.png',
      cardData: [
        {
          title: 'プロフィール1',
          text: 'プロフィールのテキスト',
          imageData: 'project_1_pc.png',
        },
        {
          title: 'プロフィール2',
          text: 'プロフィールのテキスト',
          imageData: 'project_1_pc.png',
        },
        {
          title: 'プロフィール3',
          text: 'プロフィールのテキスト',
          imageData: 'project_1_pc.png',
        },
      ],
    }
  },
  methods: {
    openModal() {
      this.$refs.modalEvent.openModal();
    },
  }
}
</script>

<style lang="scss" scoped>
.slider{
  display: flex;
  margin-top: 20px;
  overflow: scroll;
}

.magin{
  padding-bottom: 1000px;
}
</style>

