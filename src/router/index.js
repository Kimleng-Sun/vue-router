import { createRouter, createWebHistory } from "vue-router";
import data from "@/data.json"
const routes = [
  { path: "/", name: "Home", component: ()=>import('@/views/Home.vue')},
  { path: "/brazil", name: "Brazil", component: ()=>import('@/views/Brazil.vue') },
  { path: "/about", name: "About", component: ()=>import('@/views/About.vue') },
  { path: "/panama", name: "Panama", component: ()=>import('@/views/Panama.vue') },
  { path: "/jamaica", name: "Jamaica", component: ()=>import('@/views/Jamaica.vue')},
  { path: "/hawaii", name: "Hawaii", component: ()=>import('@/views/Hawaii.vue')},
  { path: "/login", name: "Login", component: ()=>import('@/views/Login.vue')},
  { path: "/destination/:id/:slug", name: "Destination",component: ()=>import('@/views/Destination.vue'),
  
    //Will Show on the same page but change URL Good for left bar and sidebar 
    //Dont forget to leave <router-view> inside Destination.vue to show where we put this element
    children: [
      { path: ":experienceSlug", name: "Experience",component: ()=>import('@/views/ExperienceShow.vue'),
        //...route.params will pass all of the params 
        props: route=>({...route.params, id: parseInt(route.params.id)})
      },
    ],
    beforeEnter: (to, from) => {
      const exists = data.destinations.find(
        (destination)=> destination.id === parseInt(to.params.id)
      )
      
      if(!exists) return {
        name: 'NotFound',
        //allow to keep the url when navigate to the different pages
        params: {pathMatch: to.path.split('/').slice(1)},
        query: to.query,
        hash: to.hash
      }
    }
  },
  //this will go to the next page
  // { path: ":experienceSlug", name: "Experience",component: ()=>import('@/views/ExperienceShow.vue'),
  //   //...route.params will pass all of the params 
  //   props: route=>({...route.params, id: parseInt(route.params.id)})
  // },
  {path: '/protected', name: "Protected", component: ()=> import('@/views/Protected.vue'),
   meta: {
      requiresAuth: true,
   }
  },
  {path: '/:pathMatch(.*)*', name: "NotFound", component: ()=> import('@/views/NotFound.vue')}
  
];



const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active-link'
});

//for meta protected
router.beforeEach((to, from)=>{
  if(to.meta.requiresAuth && !window.user){
    //need to login if not yet login
    //this will navigate us to the login page
    return {
      name: 'Login'
    }
  }
})

export default router;