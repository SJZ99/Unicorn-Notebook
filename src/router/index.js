// Composables
import { createRouter, createWebHistory } from 'vue-router'
import TakeNote from "@/views/TakeNote"
import { auth } from '@/plugins/fireBase'

const routes = [
 
  {

    path: '/',
   // component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomePage.vue'),
      },
      {
        path: 'homepage',
        name: 'HomePage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomePage.vue'),

      },
      {
        path: 'takenote',
        name: 'TakeNote',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => TakeNote,
        
      },
      {
        path: 'submitted',
        name: 'Submit',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/submitted.vue'),

      },
      {
        path: 'login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/LoginPage.vue'),

      },
      {
        path: 'welcome',
        name: 'Welcome',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Welcome.vue'),

      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to,_,next)=>{
//   if(to.path!= "/login"){
//     console.log("current user"+auth.currentUser);
//     if(auth.currentUser==null){
//       next({path:'login'});
//     }
//     else{
//       next();
//     }
//   }else{
//     next();
//   }
// });


export default router
