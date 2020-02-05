<template>
  <div class="projectDetail">
    <Header
      :headTitle = this.title
    ></Header>
    <TaskTitle
      :titleText="taskData.title"
    ></TaskTitle>
    <div class="projectDetail__labelList">
      <LabelList
        :labelList="taskData.label"
        :closeIcon="false"
      ></LabelList>
    </div>
    <DetailImage
      :imageName="taskData.image"
    ></DetailImage>
    <div class="projectDetail__contents">
      <p class="projectDetail__contentsTitle">サイトの説明</p>
      {{this.taskData.info}}
    </div>
    <div class="projectDetail__contents">
      <ul class="detailList">
        <li class="projectDetail__detailItem">
          <p class="projectDetail__contentsTitle">使用言語</p>
          {{this.taskData.detail.language}}
        </li>
        <li class="projectDetail__detailItem">
          <p class="projectDetail__contentsTitle">規模感</p>
          {{this.taskData.detail.scale}}
        </li>
        <li class="projectDetail__detailItem">
          <p class="projectDetail__contentsTitle">案件対応期間</p>
          {{this.taskData.detail.term}}
        </li>
        <li class="projectDetail__detailItem">
          <p class="projectDetail__contentsTitle">サイトURL</p>
          <a :href="taskData.detail.url">{{this.taskData.detail.url}}</a>
        </li>
        <li class="projectDetail__detailItem">
          <p class="projectDetail__contentsTitle">開発環境</p>
          {{this.taskData.detail.development}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../../container/Organisms/header.vue';
import TaskTitle from '../../components/Atoms/Text/titleText.vue';
import LabelList from '../../container/Organisms/labelList.vue';
import DetailImage from '../../components/Atoms/Image/detailImage.vue';

export default {
  components: { Header,TaskTitle,LabelList,DetailImage },
  data(){
    return{
      title: '案件詳細',
      taskData: this.$route.params.projectData,
    }
  },
  methods: {
    reload(){
      this.$router.go({path: this.$router.currentRoute.path, force: true});
      console.log('search');// eslint-disable-line
    }
  },
  created(){
    
  },
  computed: {
    
  },
}
</script>

<style lang="scss" scoped>
.projectDetail__contents{
  border: 1px solid #707070;
  padding: 8px;
  border-radius: 4px;
  text-align: left;
  font-size: 10px;
  line-height: 1.3;
  color: #707070;
  margin-bottom: 12px;
}
.projectDetail__contentsTitle{
  font-size: 12px;
  color: #707070;
  margin-bottom: 4px;
  line-height: 1;
}
.projectDetail__labelList{
  margin-top: 8px;
  margin-bottom: 8px;
}
.projectDetail__detailItem{
  margin-bottom: 12px;
}
</style>

