<template>
  <ul class="linkList">
    <li v-for="(item,index) in projectList" :key="index" class="linkListItem">
      <router-link :to="{ name: 'project-detail', params: {projectData: item } }">
        <ListLink
          :titleText = item.title
          :dateText = item.date
          :minLabelArray = item.label
        ></ListLink>
      </router-link>
    </li>
  </ul>
</template>

<script>
import ListLink from '../Molecules/Link/listLink.vue';

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
.linkList{
  border: 1px solid #9c9c9c;
  border-radius: 8px;

  .linkListItem{
    border-bottom: 1px solid #DFDFDF;

    &:last-child{
      border-bottom: none;
    }

  }
}

</style>

