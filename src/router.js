import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Books from './pages/Books.vue';
import Projects from './pages/Projects.vue';
import AoC from './pages/AoC.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/books', name: 'Books', component: Books },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/aoc', name: 'AoC', component: AoC },
];

export default new VueRouter({
  routes,
});
