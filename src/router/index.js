import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Templates/top'
import Project from '@/components/Templates/project'
import Profile from '@/components/Templates/profile'
import ProjectDetail from '@/components/Templates/projectDetail'
import Contact from '@/components/Templates/contact'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/projectDetail',
      name: 'project-detail',
      component: ProjectDetail
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ]
})
