import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const asyncComponent = name => async resolve => resolve(await import(`./page/${name}.vue`))

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: asyncComponent('index')
    },
    {
      path: '*',
      component: asyncComponent('404')
    }
  ]
})

export default router
