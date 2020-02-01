<template>
  <div class="search">
    <SearchInput @enter-event="getInput"></SearchInput>
    <SearchButton @click-searchButton="clickSearch"></SearchButton>
  </div>
</template>

<script>
import SearchInput from '../../Atoms/Input/searchInput.vue';
import SearchButton from '../../Atoms/Button/searchButton.vue';

export default {
  props:['searchData','searchWord'],
  components: { SearchInput,SearchButton },
  data(){
    return {
      input: '',
      inputText: '',
    }
  },
  methods:{
    getInput(text=''){
      this.inputText = text;
    },
    clickSearch(){
      if(this.inputText != '')  this.search();
    },
    search(){
      const results = this.searchData.filter(item => {
        return (item.title.indexOf(this.inputText) != -1 || item.label.indexOf(this.inputText) != -1)
      });
      this.$emit('search-result', results, this.inputText);
    }
  }
}
</script>

<style lang="scss" scoped>
.search{
  display: flex;
}
</style>

