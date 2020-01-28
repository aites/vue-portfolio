<template>
  <div>
  <Header
      :headTitle = title
  ></Header>
  <Title
    :titleText="searchTitle"></Title>
  <div class="sortBox">
    <Search></Search>
  </div>
  <LableList
    :labelList="searchWord"
  ></LableList>
  <ProjectList
    :projectList="project"
  ></ProjectList>
  </div>
</template>

<script>
import Header from '../Organisms/header.vue';
import ProjectList from '../Organisms/linkList.vue';
import Title from '../Atoms/Text/titleText.vue';
import LableList from '../Organisms/labelList.vue';
import Search from "../Molecules/Input/search.vue";


export default {
  components: { Header,ProjectList,Title, LableList, Search},
  data(){
    return{
      title: '案件一覧',
      searchTitle: '絞り込み',
      searchWord: [''],
      project: [
        {
          title: 'スタディサプリ',
          date:'2018/09 ~ 2020/01', 
          label: ['html','scss','vue.js'],
          image: 'project_1_pc.png',
          info: '',
          detail:{
            language: 'html,scss,vue.js',
            scale:'',
            term: '',
            url:'',
            development:'',
          },
        },
      ],
    }
  },
  watch: {
    searchWord: function () {
      console.log('search');// eslint-disable-line
    }
  },
}
</script>

<style lang="scss" scoped>
.sortBox{
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>

