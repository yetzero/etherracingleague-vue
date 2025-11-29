import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import('@/views/CharactersPage.vue')
  },
  {
    path: '/character/:slug',
    name: 'CharacterDetail',
    component: () => import('@/views/CharacterDetailPage.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('@/views/CoursesPage.vue')
  },
  {
    path: '/course/:slug',
    name: 'CourseDetail',
    component: () => import('@/views/CourseDetailPage.vue')
  },
  {
    path: '/databank',
    name: 'Databank',
    component: () => import('@/views/DatabankPage.vue')
  },
  {
    path: '/development-notes',
    name: 'Blog',
    component: () => import('@/views/BlogPage.vue')
  },
  {
    path: '/article-types/:type',
    name: 'ArticleType',
    component: () => import('@/views/ArticleTypePage.vue')
  },
  {
    path: '/article/:slug',
    name: 'ArticleDetail',
    component: () => import('@/views/ArticleDetailPage.vue')
  },
  {
    path: '/:slug',
    name: 'BlogPost',
    component: () => import('@/views/BlogPostPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
