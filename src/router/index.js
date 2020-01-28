import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Templates/top'
import Project from '@/components/Templates/project'
import Profile from '@/components/Templates/profile'
import ProjectDetail from '@/components/Templates/projectDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Top
    },
    {
      path: '/project',
      name: '',
      component: Project
    },
    {
      path: '/profile',
      name: '',
      component: Profile
    },
    {
      path: '/projectDetail',
      name: 'project-detail',
      component: ProjectDetail
    },
  ]
})
