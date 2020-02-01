<template>
  <ul class="labelData" v-show="islabelData()">
    <li class="labelItem" v-for="(label,index) of this.labelData" :key="index">
      <Label
        :labelText = label
        :class="lastLabel(index)"
      >
      </Label>
      <div class="closeIcon" @click.stop="removeLabel()" v-if="showClsoeIcon(index)">
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
  props: ['labelList','closeIcon'],
  data(){
    return{
      labelData: this.labelList,
    }
  },
  methods:{
    islabelData(){
      if(this.labelData.length === 0) return false;
      return true;
    },
    showClsoeIcon(index){
      if(!this.closeIcon) return false;
      if(index === this.labelData.length-1)  return true;
    },
    lastLabel(index){
      if(!this.closeIcon) return false;
      if(index === this.labelData.length-1)  return 'labelLast';
    },
    removeLabel(){
      this.$emit('close-label',this.labelData);
    }
  }
}
</script>

<style lang="scss" scoped>
.labelData{
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
  padding: 8px;
  top: -10px;
  bottom: 0;
  right: 0;
  height: 24px;
  margin: auto;
}
</style>

