import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Atendimento from '../components/Atendimento.vue'
import Principal from '../components/Home.vue'
import Cadastro from '../components/Cadastro.vue'

// 1. Defina suas rotas com o tipo RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Principal
  },
  {
    path: '/GEMS',
    name: 'Home',
    component: Principal
  },
  {
    path: '/GEMS/atendimento',
    name: 'Atendimento',
    component: Atendimento
  },
  {
    path: '/GEMS/cadastro',
    name: 'Cadastro',
    component: Cadastro
  }
]

// 2. Crie a instância do router
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 3. Exporte a instância para ser usada no arquivo principal (main.ts)
export default router