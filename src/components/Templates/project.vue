<template>
  <div class="project">
  <Header
      :headTitle="title"
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
      @close-label="closeLabel"
    ></LableList>
  </div>
  <ProjectList
    v-show="showfirstProjectList"
    :projectList="project"
  ></ProjectList>
  <ProjectList
    v-show="showProjectList"
    :projectList="searchResult.project"
  ></ProjectList>
  <p class="project__noText" v-show="showNoSearch">検索条件がありませんでした</p>
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
      showfirstProjectList :true,
      showProjectList: false,
      showNoSearch: false,
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
            development:'gulp,git,svn',
          },
        },
        {
          title: 'リクナビ新卒',
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
      searchResult:[],
    }
  },
  methods:{
    showfirst(){
      return this.searchResult.project.length === 0 ? true : false;
    },
    search(result,word){
      if(this.searchWord.indexOf(word) == -1) this.searchWord.push(word);
      this.searchedProject(result);
    },
    searchedProject(results){
      if(results.length === 0){
        this.showfirstProjectList = false;
        this.showProjectList = false;
        this.showNoSearch = true;
        return false;
      }else{
        this.showfirstProjectList = false;
        this.showProjectList = true;
        this.showNoSearch = false;
        this.removeResultProject(); 
      }
      this.$set(this.searchResult, 'project', results);
      console.log('search',this.searchResult);// eslint-disable-line
      // console.log('search',this.searchResult);// eslint-disable-line
      // this.resultProject = results;
      // this.resultProject.splice();
    },
    closeLabel(label){
      console.log(label);// eslint-disable-line
      this.resetSearch();
    },
    removeResultProject(){
      this.$set(this.searchResult, 'project', []);
      // this.searchResult.splice(-this.searchResult.length);
    },
    resetSearch(){
      this.removeResultProject();
      this.showProjectList = false;
      this.showfirstProjectList = true;
    }
  },
  created(){
    // this.$set(this.searchResult, 'project', this.project);
    console.log(this.searchResult);// eslint-disable-line
  }
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
.project__noText{
  font-size: 12px;
}
</style>

