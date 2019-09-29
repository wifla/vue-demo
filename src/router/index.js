// import store from './vuex/store'
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log('to',to.path);
  next();
})

export default router;