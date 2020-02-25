<template>
  <div class="labelList">
    <ul class="labelList__list" v-show="islabelData">
      <li class="labelList__item" v-for="(label,index) of this.labelList" :key="index">
        <Label
          :labelText = label
          :class="lastLabel(index)"
        >
        </Label>
        <div class="labelList__closeIcon" @click.stop="removeLabel()" v-if="showCloseIcon(index)">
          <Close/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Label from '../../components/Atoms/Label/label_M.vue';
import Close from '../../components/Atoms/Icon/LabelCloseIcon.vue';

export default {
  components: { Label,Close },
  props: ['labelList','closeIcon'],
  methods:{
    showCloseIcon(index){
      if(!this.closeIcon) return false;
      if(index === this.labelList.length-1)  return true;
    },
    lastLabel(index){
      if(!this.closeIcon) return false;
      if(index === this.labelList.length-1)  return 'labelList__labelLast';
    },
    removeLabel(){
      this.$emit('close-label',this.labelList);
    }
  },
  computed:{
    islabelData(){
      return this.labelList.length !== 0;
    },
  }
}
</script>

<style lang="scss" scoped>
.labelList__list{
  display: flex;
  flex-wrap: wrap;
}
.labelList__item{
  margin-right: 4px;
  position: relative;
  margin-bottom: 4px;
}
.labelList__labelLast{
  padding-right: 20px;
}
.labelList__closeIcon{
  position: absolute;
  padding: 8px;
  top: -10px;
  bottom: 0;
  right: 0;
  height: 24px;
  margin: auto;
}
</style>

