import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import Brazil from '@/views/Brazil.vue'
import About from '@/views/About.vue'
import Panama from '@/views/Panama.vue'
import Jamaica from '@/views/Jamaica.vue'
import Hawaii from '@/views/Hawaii.vue'
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/brazil", name: "Brazil", component: Brazil },
  { path: "/about", name: "About", component: About },
  { path: "/panama", name: "Panama", component: Panama },
  { path: "/jamaica", name: "Jamaica", component: Jamaica },
  { path: "/hawaii", name: "Hawaii", component: Hawaii },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;