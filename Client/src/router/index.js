import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children:[
        {
          path: '/',
          name: 'ArticlesList',
          component: () => import('../components/ArticlesList.vue'),
       
        },
        {
          path: '/find',
          name: 'find',
          component: () => import('../components/FindArticle.vue'),
       
        },
        {
          path: '/create',
          name: 'create',
          component: () => import('../components/CreateArticle.vue'),
       
        },
     
      ]
    }
 
  ]
})

export default router
