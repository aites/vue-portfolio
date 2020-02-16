<template>
  <input type="text" class="searchInput" placeholder="search" @change="inputValue($event.target.value)"/>
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
.searchInput{
  border: 1px solid #DFDFDF;
  padding-left: 8px;
  border-radius: 4px 0 0 4px;

  &:focus {
    border: 1px solid inherit;
    outline: 0;
  }
}
</style>