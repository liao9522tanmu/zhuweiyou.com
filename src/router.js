import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// const loadComponent = name => async resolve => resolve(await import(`./page/${name}.vue`))
const loadComponent = name => resolve => resolve(require(`./page/${name}.vue`))

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: loadComponent('index')
    },
    {
      path: '*',
      component: loadComponent('404')
    }
  ]
})

export default router
