import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '../views/Principal.vue'
import CatalogoPodologia from '../views/Catalogo.vue'
import Especialistas from '../views/Especialistas.vue'
import CarritoCompra from '../views/Carrito.vue'
import Servicio from '../views/Servicios.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/catalogo',
    name: 'catalogo',
    component: CatalogoPodologia,
    meta: {
      autenticado: true,
    },
  },

  {
    path: '/Especialistas',
    name: 'Especialistas',
    component: Especialistas,
    meta: {
      autenticado: true,
    },
  },

  {
    path: '/carrito',
    name: 'Carrito',
    component: CarritoCompra,
    meta: {
      autenticado: true,
    },
  },

  {
    path: '/servicios',
    name: 'servicios',
    component: Servicio,
    meta: {
      autenticado: true,
    },
  },
 
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("logueado");
  // let entrada =localStorage.getItem("isSucces");
  let autenticado = to.matched.some((record) => record.meta.autenticado);

  if (autenticado && !token) {
    next("/");
  } else if (!autenticado && token) {
    next("/catalogo");
  } else {
    next();
  }
});
export default router
