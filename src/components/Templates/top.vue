<template>
  <div class="top">
    <Header
      :headTitle = title
    ></Header>
    <MainVisual
      :image = this.imageData
    ></MainVisual>
  </div>
</template>

<script>
import Header from '../Organisms/header.vue';
import MainVisual from '../Organisms/mainVisual.vue';

export default {
  
  components: { Header,MainVisual },
  data(){
    return{
      title: 'ポートフォリオ',
      imageData: 'project_1_pc.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  display: flex;
}
</style>

