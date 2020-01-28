<template>
  <div class="search">
    <SearchInput @enterevent="getInput"></SearchInput>
    <SearchButton></SearchButton>
  </div>
</template>

<script>
import SearchInput from '../../Atoms/Input/searchInput.vue';
import SearchButton from '../../Atoms/Button/searchButton.vue';

export default {
  components: { SearchInput,SearchButton },
  data(){
    return {
      input: '',
      project: [],
      inputText: '',
    }
  },
  methods:{
    getInput(text='') {
      this.inputText = text;
    }
  }
}
</script>

<style lang="scss" scoped>
.search{
  display: flex;
}
</style>

