<template>
  <div class="label">
    {{text}}
  </div>
</template>

<script>
export default {
  props:['linkText'],
  data() {
    return{
      text: this.linkText,
      icon: this.linkIcon
    }
  },
}
</script>

<style lang="scss" scoped>
.label{
  font-size: 20px;
  height: 28px;
  line-height: 28px;
}
</style>