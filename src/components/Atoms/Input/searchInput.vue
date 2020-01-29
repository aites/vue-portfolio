<template>
  <input type="text" class="search" placeholder="serach" @change="inputValue($event.target.value)"/>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  methods: {
    inputValue(value){
      this.$emit("enter-event", value);
    }
  },
}
</script>

<style lang="scss" scoped>
.search{
  border: 1px solid #DFDFDF;
  padding-left: 8px;
  border-radius: 4px 0 0 4px;

  &:focus {
    border: 1px solid inherit;
    outline: 0;
  }
}
</style>