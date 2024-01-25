import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const routes = [
  
  //la ruta base
  {
    path: '/',
    component:()=> import('../components/LandPage.vue')
},
{
    path: '/formulario',
    name:'formulario',
    component: () => import('../components/Formulario.vue')
},
{
    path: '/person',
    name: 'person',
    component: () => import('../components/Person.vue')
},
{
    path:'*',
    component:()=> import('../views/ErrorPages/Error404.vue')
},
{
    path: '/inicio',
    component: ()=> import ('../views/Index.vue'),

    //Los componentes que se renderizan en router-vue
    children: [
        {
            path: '/',
            name: 'inicio',
            component: () => import('../components/Inicio.vue')
        },
        
        {
            path: '/main',
            name: 'main',
            component: () => import('../components/Main.vue')
        },
        
    ]
}
    
  ]

const router = new VueRouter({ routes, })
export default router;