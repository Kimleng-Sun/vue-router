import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: ()=>import('@/views/Home.vue') },
  { path: "/brazil", name: "Brazil", component: ()=>import('@/views/Brazil.vue') },
  { path: "/about", name: "About", component: ()=>import('@/views/About.vue') },
  { path: "/panama", name: "Panama", component: ()=>import('@/views/Panama.vue') },
  { path: "/jamaica", name: "Jamaica", component: ()=>import('@/views/Jamaica.vue')},
  { path: "/hawaii", name: "Hawaii", component: ()=>import('@/views/Hawaii.vue')},
  { path: "/destination/:id/:slug", name: "Destination",component: ()=>import('@/views/Destination.vue')},
  { path: "/destination/:id/:slug/:experienceSlug", name: "Experience",component: ()=>import('@/views/ExperienceShow.vue'),
    //...route.params will pass all of the params 
    props: route=>({...route.params, id: parseInt(route.params.id)})
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active-link'
});

export default router;