<template>
  <div class="modal-overlay" v-on:click.self="closeModal" v-if="modal">
    <div class="modal">
      <CardImage :imageName="cardImage"></CardImage>
      <div class="modalContents">
        <HeadText :titleText="cardTitle"></HeadText>
        <DetailText :detailText="cardText"></DetailText>
      </div>
    </div>
  </div>
</template>

<script>
import HeadText from '../Atoms/Text/minHeadText.vue';
import CardImage from '../Atoms/Image/cardImage_M';
import DetailText from '../Atoms/Text/detailText.vue';

export default {
  components: { HeadText,CardImage,DetailText },
  props:['cardTitle','cardText','cardImage'],
  data(){
    return{
      modal: false,
    }
  },
  methods: {
    openModal() {
      const body = document.body;
      const scrollY = window.scrollY;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      this.modal = true;
    },
    closeModal() {
      const body = document.body;
      const scrollY = body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
      this.modal = false;
    }
  },
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.modal{
  width: 74vw;
  border-radius: 4px;
  border: 1px solid #ECECEC;
  margin: 15vh auto 0;
  height: 70vh;
  background-color: #FFF;
  overflow: scroll;
}

.modalContents{
  padding: 12px;
}
</style>