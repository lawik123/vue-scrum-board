import Vue from 'vue';
import VueRouter from 'vue-router';
import BoardsOverview from '../components/BoardsOverview.vue';
import Board from '../components/scrumboard/Board.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: BoardsOverview,
  },
  {
    path: '/board/:board',
    name: 'board',
    component: Board,
    props: true,
  },
];

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes,
});

export default router;
