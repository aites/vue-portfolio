<template>
  <div class="projectDetail">
    <Header
      :headTitle = this.title
    ></Header>
    <TaskTitle
      :titleText="taskData.title"
    ></TaskTitle>
    <LabelList></LabelList>
    <DetailImage
      :imageName="taskData.image"
    ></DetailImage>
    <div class="contents">
      {{this.taskData.info}}
    </div>
    <div class="contents">
      <ul class="detailList">
        <li class="detailItem">{{this.taskData.language}}</li>
        <li class="detailItem">{{this.taskData.scale}}</li>
        <li class="detailItem">{{this.taskData.term}}</li>
        <li class="detailItem">{{this.taskData.url}}</li>
        <li class="detailItem">{{this.taskData.development}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../Organisms/header.vue';
import TaskTitle from '../Atoms/Text/titleText.vue';
import LabelList from '../Organisms/labelList.vue';
import DetailImage from '../Atoms/Image/detailImage.vue';

export default {
  components: { Header,TaskTitle,LabelList,DetailImage },
  data(){
    return{
      title: '案件詳細',
      // taskData: {
      //   title: 'サイトタイトル',
      //   label: ['html','scss','vue.js'],
      //   image: 'project_1_pc.png',
      //   info: '',
      //   detail:{
      //     language: 'html,scss,vue.js',
      //     scale:'',
      //     term: '',
      //     url:'',
      //     development:'',
      //   },
      // }
      taskData: this.$route.params.projectData,
    }
  },
  methods: {
    
  },
  created(){
    console.log(this.taskData);// eslint-disable-line
    console.log(this.$route.params.projectData);// eslint-disable-line
  }
}
</script>

<style lang="scss" scoped>

</style>

