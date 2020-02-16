<template>
  <div class="project">
  <Header
      :headTitle="title"
  ></Header>
  <TitleText
    :titleText="searchTitle"></TitleText>
  <div class="project__searchBox">
    <Search
      :searchData="updateSearchData()"
      :searchWord="searchWordList"
      :searchFanction="search"
      ref="searchRef"
    ></Search>
    <div class="project__reset">
      <ResetButton
        @click-resetButton="resetSearch"
      ></ResetButton>
    </div>
  </div>
  <p v-show="isShowProjectList" class="project__searchWord">検索ワード：{{searchWordList}}</p>
  <LinkList
    v-show="showFirstProjectList"
    :projectList="project"
  ></LinkList>
  <LinkList
    v-show="isShowProjectList"
    :projectList="searchResult.project"
  ></LinkList>
  <p class="project__noText" v-show="isShowNoSearch">検索条件がありませんでした</p>
  </div>
</template>

<script>
import Header from '../../container/Organisms/header.vue';
import TitleText from '../../components/Atoms/Text/titleText.vue';
import Search from '../../components/Molecules/Input/search.vue';
import LinkList from '../../container/Organisms/linkList.vue';
import ResetButton from '../../components/Atoms/Button/resetButton.vue';


export default {
  components: { Header,LinkList,TitleText,Search,ResetButton},
  data(){
    return{
      title: '案件一覧',
      searchTitle: '絞り込み',
      searchWordList: '',
      showFirstProjectList :true,
      isShowProjectList: false,
      isShowNoSearch: false,
      project: [
        {
          title: 'スタディサプリ',
          date:'2018/09 ~ 2020/01', 
          label: ['html','scss','jQuery','vue.js'],
          image: 'project_1_pc.png',
          info: 'エンハンス、リニューアルと対応',
          detail:{
            language: 'html,scss,jQuery,vue.js',
            scale:'大規模案件',
            term: '2018/09 ~ 2020/01',
            url:'https://shingakunet.com/',
            development:'gulp,git,svn',
          },
        },
        {
          title: 'リクナビ新卒1',
          date:'2017/04 ~ 2018/02', 
          label: ['html','scss','jQuery'],
          image: 'project_2_pc.png',
          info: 'エンハンス、リニューアルと対応',
          detail:{
            language: 'html,scss,jQuery,vue.js',
            scale:'大規模案件',
            term: '2017/04 ~ 2018/02',
            url:'https://job.rikunabi.com/',
            development:'webpack,git',
          },
        },
        {
          title: 'スタディサプリ',
          date:'2018/09 ~ 2020/01', 
          label: ['html','scss','jQuery','vue.js'],
          image: 'project_1_pc.png',
          info: 'エンハンス、リニューアルと対応',
          detail:{
            language: 'html,scss,jQuery,vue.js',
            scale:'大規模案件',
            term: '2018/09 ~ 2020/01',
            url:'https://shingakunet.com/',
            development:'gulp,git,svn',
          },
        },
        {
          title: 'リクナビ新卒2',
          date:'2017/04 ~ 2018/02', 
          label: ['html','scss','jQuery'],
          image: 'project_2_pc.png',
          info: 'エンハンス、リニューアルと対応',
          detail:{
            language: 'html,scss,jQuery,vue.js',
            scale:'大規模案件',
            term: '2017/04 ~ 2018/02',
            url:'https://job.rikunabi.com/',
            development:'webpack,git',
          },
        },
      ],
      searchResult:[],
    }
  },
  methods:{
    updateSearchData(){
      return this.searchResult.length === 0 ? this.project : this.searchResult.project;
    },
    showfirst(){
      return this.searchResult.project.length === 0 ? true : false;
    },
    search(result,word){
      if(this.searchWordList.indexOf(word) == -1)  this.searchedProject(result);
      this.searchWordList = word;
    },
    searchedProject(results){
      const isNoResults = results.length === 0;
      this.showFirstProjectList = false;
      this.isShowProjectList = !isNoResults;
      this.isShowNoSearch = isNoResults;  
      this.$set(this.searchResult, 'project', results);
    },
    resetSearch(){
      this.searchWordList = '';
      this.isShowProjectList = false;
      this.showFirstProjectList = true;
      this.isShowNoSearch = false;
    }
  },
}
</script>

<style lang="scss" scoped>
.project__searchLabel{
  margin-bottom: 8px;
}
.project__searchBox{
  display: flex;
  margin-top: 12px;
  margin-bottom: 12px;
}
.project__reset{
  margin-left: 12px;
}
.project__searchWord{
  text-align: left;
  font-size: 14px;
  margin-bottom: 12px;
}
.project__noText{
  font-size: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
}
</style>

