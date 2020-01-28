<template>
  <ul class="labelList">
    <li class="labelItem" v-for="(label,index) of labelDatas" :key="index">
      <Label
        :labelText = label.text
        :class="lastLabel(index)"
      >
      </Label>
      <div class="closeIcon" v-on:click.stop="removeLabel()" v-if="showClsoeIcon(index)">
        <Close></Close>
      </div>
    </li>
  </ul>
</template>

<script>
import Label from '../Atoms/Label/label_M.vue';
import Close from '../Atoms/Icon/close.vue';

export default {
  components: { Label,Close },
  props: ['labelList'],
  data(){
    return{
      // labelData: this.labelList,
      labelDatas: [
        {
          text:'HTML',
          id:1
        },
        {
          text:'CSS/SCSS',
          id:2
        },
        {
          text:'ES6',
          id:3
        },
        {
          text:'Vue.js',
          id:4
        },
        {
          text:'Jade',
          id:5
        },
        {
          text:'Velocity',
          id:6
        },
        {
          text:'firebase',
          id:7
        },
        {
          text:'react',
          id:8
        },
        {
          text:'TypeScript',
          id:9
        },
      ],
    }
  },
  methods:{
    showClsoeIcon(index){
      if(index === this.labelDatas.length-1)
        return true;
    },
    lastLabel(index){
      if(index === this.labelDatas.length-1)
        return 'labelLast';
    },
    removeLabel(){
      this.labelDatas.pop();
    }
  }
}
</script>

<style lang="scss" scoped>
.labelList{
  display: flex;
  flex-wrap: wrap;
}
.labelItem{
  margin-right: 4px;
  position: relative;
  margin-bottom: 4px;
}
.labelLast{
  padding-right: 20px;
}
.closeIcon{
  position: absolute;
  top: -8px;
  bottom: 0;
  right: 0;
  padding: 8px;
  margin: auto;
}
</style>

