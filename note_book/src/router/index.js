import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/index'
import Book from '@/components/book/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children: [
        {
          path: '/book',
          name: 'book',
          component: Book
        }
      ]
    }
  ]
})
