import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/container/Templates/top'
import Project from '@/container/Templates/project'
import Profile from '@/container/Templates/profile'
import ProjectDetail from '@/container/Templates/projectDetail'
import Contact from '@/container/Templates/contact'

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
