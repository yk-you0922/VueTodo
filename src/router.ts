import LoginPage from './pages/LoginPage.vue';
import TodoPage from './pages/TodoPage.vue';
import { createWebHistory, createRouter } from 'vue-router';

// ルーティングパスと表示内容を配列として設定
const routes = [
  { path:'/', name: 'login', component: LoginPage },
  { path:'/todo', name: 'todo', component: TodoPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;