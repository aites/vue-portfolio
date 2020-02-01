<template>
  <div class="headerMenu">
    <ul class="headerMenu__list">
      <router-link tag="li" v-for="item in menu" class="headerMenu__item" :to="item.pass" :key="item.text">
        <IconHome v-if="item.text === 'トップ'"></IconHome>
        <IconProfile v-if="item.text === 'プロフィール'"></IconProfile>
        <IconProject v-if="item.text === '案件一覧'"></IconProject>
        <IconMail v-if="item.text === 'お問合わせ'"></IconMail>
        <MenuLink class="headerMenu__itemText"
          :linkText = item.text
        ></MenuLink>
      </router-link>
    </ul>
  </div>
</template>

<script>
import MenuLink from '../Atoms/Link/menuLink.vue';
import IconHome from '../Atoms/Icon/homeIcon.vue';
import IconProfile from '../Atoms/Icon/profileIcon.vue';
import IconProject from '../Atoms/Icon/projectIcon.vue';
import IconMail from '../Atoms/Icon/mailIcon.vue';


export default {
  components: { MenuLink,IconHome,IconProfile,IconProject,IconMail },
  props:['headTitle'],
  data(){
    return{
      menu: [
        {
          text: 'トップ',
          pass: '/',
        },
        {
          text: 'プロフィール',
          pass: '/profile',
        },
        {
          text: '案件一覧',
          pass: '/project',
        },
        {
          text: 'お問合わせ',
          pass: '/contact',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.headerMenu__list{
  border: 1px solid #9c9c9c;
  padding: 12px;
  position: absolute;
  top: 44px;
  left: 0;
  z-index: 100;
  background-color: #FFF;
}
.headerMenu__item{
  display: flex;
  height: 20px;
  margin-bottom: 8px;

  &:last-of-type{
    margin-bottom: 0;
  }
}
.headerMenu__itemText{
  font-size: 12px;
  line-height: 20px;
  height: 20px;
}
</style>