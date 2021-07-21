import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Home from '../views/home/home.vue'
import Register from '../views/register/register.vue'
import Login from '../views/login/login.vue'
import About from '../views/about/about.vue'
import PublicHeader from '../components/layout/PublicHeader.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      'layout': PublicHeader
    }
  },
  {
    path: '/register',
    name: 'Register',
    components: {
      default: Register,
      'layout': PublicHeader
    }
  },
  {
    path: '/login',
    name: 'Login',
    components: {
      default: Login,
      'layout': PublicHeader
    }
  },
  {
    path: '/about',
    name: 'About',
    components: {
      default: About,
      'layout': PublicHeader
    }
  },

]

const router = new VueRouter({
  routes
})

export default router
