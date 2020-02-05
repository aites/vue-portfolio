<template>
  <div class="top">
    <Header
      :headTitle = title
    ></Header>
    <MainVisual
      :image="imageData"
    ></MainVisual>
    <p class="top__text">{{text}}</p>
  </div>
</template>

<script>
import Header from '../../container/Organisms/header.vue';
import MainVisual from '../../container/Organisms/mainVisual.vue';

export default {
  
  components: { Header,MainVisual },
  data(){
    return{
      title: 'ポートフォリオサイト',
      imageData: 'project_1_pc.png',
      text: '左上のメニューをクリックしてください。'
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  display: flex;
}
.top__text{
  text-align: left;
  margin-top: 8px;
}
</style>
