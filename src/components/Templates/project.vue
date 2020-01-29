<template>
  <div class="project">
  <Header
      :headTitle = title
  ></Header>
  <Title
    :titleText="searchTitle"></Title>
  <div class="project__searchBox">
    <Search
      :searchData="project"
      @search-result="search"
    ></Search>
  </div>
  <div class="project__searchLabel">
    <LableList
      :labelList="searchWord"
      :closeIcon="true"
    ></LableList>
  </div>
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
      searchWord: [],
      project: [
        {
          title: 'スタディサプリ',
          date:'2018/09 ~ 2020/01', 
          label: ['html','scss','vue.js'],
          image: 'project_1_pc.png',
          info: 'エンハンス、リニューアルと対応',
          detail:{
            language: 'html,scss,jQuery,vue.js',
            scale:'50ページ',
            term: '2018/09 ~ 2020/01',
            url:'https://shingakunet.com/',
            development:'glup,git,svn',
          },
        },
        {
          title: 'リクナビ進学',
          date:'2017/04 ~ 2018/02', 
          label: ['html','scss','jQuery'],
          image: 'project_2_pc.png',
          info: 'エンハンス、リニューアルと対応',
          detail:{
            language: 'html,scss,jQuery,vue.js',
            scale:'50ページ',
            term: '2017/04 ~ 2018/02',
            url:'https://job.rikunabi.com/',
            development:'glup,git,svn',
          },
        },
      ],
    }
  },
  methods:{
    search(result,word){
      console.log(word);// eslint-disable-line
      if(this.searchWord.indexOf(word) != -1) this.searchWord.push(word);
      console.log(this.searchWord);// eslint-disable-line
    }
  },
}
</script>

<style lang="scss" scoped>
.project__searchLabel{
  margin-bottom: 8px;
}
.project__searchBox{
  margin-top: 12px;
  margin-bottom: 12px;
}
</style>

