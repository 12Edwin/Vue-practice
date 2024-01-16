import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

const routes = [
  
  //la ruta base
    
    {
        path: '/',
        redirect: {name: 'inicio'},
    },
    {
        path: '/',
        component: {
            render(c) {
                return c('router-view');
            },
        }, 
        children:[
            {
                name: 'inicio',
                path: '/',
                component: () => import ('../components/Inicio.vue')
            },
            {
                path: '/component1',
                name: 'component1',
                component: () => import('../components/Component1.vue')
            },
            {
                path: '/component2',
                name: 'component2',
                component: () => import('../components/Component2.vue')
            },
            {
                path: '/component3',
                name: 'component3',
                component: () => import('../components/Component3.vue')
            }
        ]
    },
    
  ]

const router = new VueRouter({ routes, })
export default router;