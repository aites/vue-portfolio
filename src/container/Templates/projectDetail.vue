<template>
  <div class="projectDetail">
    <Header :headTitle="title"></Header>
    <TitleText :titleText="taskData.title"></TitleText>
    <div class="projectDetail__labelList" v-if="showLabel">
      <LabelList :labelList="taskData.label" :closeIcon="false"></LabelList>
    </div>
    <DetailImage :imageName="taskData.image"></DetailImage>
    <div class="projectDetail__contents">
      <p class="projectDetail__contentsTitle">サイトの説明</p>
      {{ info }}
    </div>
    <div class="projectDetail__contents">
      <ul class="detailList">
        <li class="projectDetail__detailItem">
          <p class="projectDetail__contentsTitle">使用言語</p>
          {{ language.join(',') }}
        </li>
        <li class="projectDetail__detailItem">
          <p class="projectDetail__contentsTitle">規模感</p>
          {{ scale }}
        </li>
        <li class="projectDetail__detailItem">
          <p class="projectDetail__contentsTitle">案件対応期間</p>
          {{ term }}
        </li>
        <li class="projectDetail__detailItem">
          <p class="projectDetail__contentsTitle">サイトURL</p>
          <a :href="taskData.detail.url">{{ url }}</a>
        </li>
        <li class="projectDetail__detailItem">
          <p class="projectDetail__contentsTitle">開発環境</p>
          {{ development.join(',') }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../../container/Organisms/header.vue';
import TitleText from '../../components/Atoms/Text/titleText.vue';
import LabelList from '../../container/Organisms/labelList.vue';
import DetailImage from '../../components/Atoms/Image/detailImage.vue';

export default {
  components: { Header, TitleText, LabelList, DetailImage },
  data() {
    return {
      title: '案件詳細',
      taskData: this.$route.params.projectData,
    };
  },
  methods: {
    reload() {
      this.$router.go(-1);
    },
    methodThatForcesUpdate() {
      this.$forceUpdate();
    },
    showLabel() {
      return this.taskData.label > 0;
    },
  },
  mounted() {
    window.onload = () => {
      this.reload();
    };
  },
  computed: {
    info() {
      return this.taskData.info;
    },
    language() {
      return this.taskData.detail.language;
    },
    scale() {
      return this.taskData.detail.scale;
    },
    term() {
      return this.taskData.detail.term;
    },
    url() {
      return this.taskData.detail.url;
    },
    development() {
      return this.taskData.detail.development;
    },
  },
};
</script>

<style lang="scss" scoped>
.projectDetail__contents {
  border: 1px solid #707070;
  padding: 8px;
  border-radius: 4px;
  text-align: left;
  font-size: 10px;
  line-height: 1.3;
  color: #707070;
  margin-bottom: 12px;
  @media all and (min-width: 501px) {
    font-size: 14px;
  }
}
.projectDetail__contentsTitle {
  font-size: 12px;
  color: #707070;
  margin-bottom: 4px;
  line-height: 1;
  @media all and (min-width: 501px) {
    font-size: 16px;
    font-weight: bold;
  }
}
.projectDetail__labelList {
  margin-top: 8px;
  margin-bottom: 8px;
}
.projectDetail__detailItem {
  margin-bottom: 12px;
}
</style>
