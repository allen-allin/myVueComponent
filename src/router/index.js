import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import countDown from '@/components/countDown.vue'
import snake from '@/components/snake.vue'
import doubleBounce from '@/components/double-bounce.vue'
import spinner from '@/components/spinner.vue'
// import a from '@/components/a.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/countDown',
      component: countDown,
      name: 'countDown'
    },{
      path: '/spinner',
      component: spinner,
      name: 'spinner'
    }
  ]
})
