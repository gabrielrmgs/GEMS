import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Atendimento from '../components/Atendimento.vue'
import Principal from '../components/Home.vue'
import Cadastro from '../components/Cadastro.vue'
import Equipe from '../components/Equipe.vue'
import VideosPagina from '../components/VideosPagina.vue'
import ArtigosPagina from '../components/ArtigosPagina.vue'
import ArtigoDetalhe from '../components/ArtigoDetalhe.vue'
import Noticias from '../components/Noticias.vue'
import NoticiaDetalhe from '../components/NoticiaDetalhe.vue'

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
  },
  {
    path: '/GEMS/equipe',
    name: 'Equipe',
    component: Equipe
  },
  {
    path: '/GEMS/videos',
    name: 'Videos',
    component: VideosPagina
  },
  {
    path: '/GEMS/artigos',
    name: 'Artigos',
    component: ArtigosPagina
  },
  {
    path: '/GEMS/artigos/detalhe/:id',
    name: 'ArtigoDetalhe',
    component: ArtigoDetalhe
  },
  {
    path: '/GEMS/noticias',
    name: 'Noticias',
    component: Noticias
  },
  {
    path: '/GEMS/noticias/detalhe/:id',
    name: 'NoticiaDetalhe',
    component: NoticiaDetalhe
  }
]

// 2. Crie a instância do router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

// 3. Exporte a instância para ser usada no arquivo principal (main.ts)
export default router