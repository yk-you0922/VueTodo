import LoginPage from './pages/LoginPage.vue';
import TodoPage from './pages/TodoPage.vue';
import { createWebHistory, createRouter } from 'vue-router';

// ルーティングパスと表示内容を配列として設定
const routes = [
  { path:'/', name: 'LoginPage', component: LoginPage },
  { path:'/todo', name: 'TodoPage', component: TodoPage },
];

const router = createRouter({
  // mode: 'history',
  history: createWebHistory(),
  routes,
});

export default router;