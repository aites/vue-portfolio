<template>
  <ul class="headerMenu">
    <router-link tag="li" v-for="item in menu" class="menuItem" :to="item.pass" :key="item.text">
      <IconHome v-if="item.text === 'トップ'"></IconHome>
      <IconProfile v-if="item.text === 'プロフィール'"></IconProfile>
      <IconProject v-if="item.text === '案件一覧'"></IconProject>
      <IconMail v-if="item.text === 'お問合わせ'"></IconMail>
      <MenuLink class="menuText"
        :linkText = item.text
      ></MenuLink>
    </router-link>
  </ul>
</template>

<script>
import MenuLink from '../Atoms/Link/menuLink.vue';
import IconHome from '../Atoms/Icon/home.vue';
import IconProfile from '../Atoms/Icon/profile.vue';
import IconProject from '../Atoms/Icon/project.vue';
import IconMail from '../Atoms/Icon/mail.vue';


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
.headerMenu{
  border: 1px solid #9c9c9c;
  padding: 12px;
  position: absolute;
  top: 36px;
  left: 0;
  z-index: 100;
  background-color: #FFF;
}
.menuText{
  font-size: 12px;
  line-height: 20px;
  height: 20px;
}
.menuItem{
  display: flex;
  height: 20px;
  margin-bottom: 8px;

  &:last-of-type{
    margin-bottom: 0;
  }
}
</style>

