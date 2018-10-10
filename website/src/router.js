import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import FamilyMembers from './components/FamilyMembers.vue'
import FamilyHistory from './components/FamilyHistory.vue'
import FamilyTree from './components/FamilyTree.vue'
import FamilyGallery from './components/FamilyGallery.vue'
import FamilyVision from './components/FamilyVision.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/family/members',
    name: 'familyMembers',
    component: FamilyMembers
  }, {
    path: '/family/history',
    name: 'familyHistory',
    component: FamilyHistory
  }, {
    path: '/family/tree',
    name: 'familyTree',
    component: FamilyTree
  }, {
    path: '/family/gallery',
    name: 'familyGallery',
    component: FamilyGallery
  }, {
    path: '/family/vision',
    name: 'familyVision',
    component: FamilyVision
  }]
})