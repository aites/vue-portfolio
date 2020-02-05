<template>
  <div class="linkList">
    <ul class="linkList__list">
      <li v-for="(item,index) in projectList" :key="index" class="linkList__item">
        <router-link :to="{ name: 'project-detail', params: {projectData: item } }">
          <ListLink
            :titleText = item.title
            :dateText = item.date
            :minLabelArray = item.label
          ></ListLink>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import ListLink from '../../components/Molecules/Link/listLink.vue';

export default {
  components: { ListLink },
  props: ['projectList'],
  data(){
    return{
      // projectArray: this.projectList,
    }
  },
}
</script>

<style lang="scss" scoped>
.linkList__list{
  border: 1px solid #9c9c9c;
  border-radius: 8px;
}
.linkList__item{
    border-bottom: 1px solid #DFDFDF;

    &:last-child{
      border-bottom: none;
    }

  }

</style>

