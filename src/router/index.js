import Vue from 'vue'
import VueRouter from 'vue-router'
import Boards from '../components/scrumboard/boards'
import Board from '../components/scrumboard/board'

Vue.use(VueRouter)

const routes = [
    { 
       path: '/',
       component: Boards,
    },
    { 
        path: '/board/:board',
        name: 'board',
        component: Board,
        props: true,
     }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
   routes
})

export default router