import Login from './../views/Login.vue'
import NotFound from './../views/404.vue'
import Home from './../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: { path: '/home' }
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/404',
        component: NotFound,
        name: 'notfound'
    },
    {
        path: '/home',
        component: Home,
        name: 'home',
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;