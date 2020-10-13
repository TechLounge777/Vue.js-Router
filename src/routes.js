import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        { path: '/home', component: Home },
        { path: '/about', component: About },
        { path: '/contact', component: Contact }
    ]
})