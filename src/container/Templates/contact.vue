<template>
  <div class="contact">
    <Header :headTitle="title"></Header>
    <div class="contact__iframe" :style="{height: iframeHeight}">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScvF0pqd82kaaT-WyO7OYe4NMNcyHilcnqyCL--RNgKO4XYBA/viewform?embedded=true"
        width="100%"
        :height="iframeHeight"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >読み込んでいます…</iframe>
    </div>
  </div>
</template>

<script>
import Header from '../../container/Organisms/header.vue';

export default {
  components: { Header },
  data() {
    return {
      title: 'お問い合わせ',
      iframeHeight: '',
    };
  },
  created() {
    const displayHeight = window.innerHeight;
    this.iframeHeight = `${displayHeight - 60}px`;
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
}
.contact__text {
  text-align: left;
  margin-top: 8px;
}
iframe {
  height: 100%;
}
</style>
