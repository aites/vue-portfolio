<template>
  <div class="contact">
    <Header
      :headTitle = title
    ></Header>
    <p class="contact__text">{{text}}</p>
  </div>
</template>

<script>
import Header from '../../container/Organisms/header.vue';

export default {
  components: { Header },
  data(){
    return{
      title: 'お問い合わせ',
      text: 'GoogleFormを設置予定'
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  display: flex;
}
.contact__text{
  text-align: left;
  margin-top: 8px;
}
</style>
