import { createApp } from "vue";

import { RouterLink, createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

import BemVindo from "./views/BemVindo.vue";
import EscolhaVia from "./views/EscolhaVia.vue";
import SobreTrabalho from "./views/SobreTrabalho.vue";
import ConstrucaoVetor from "./views/ConstrucaoVetor.vue";
import TransformAgrobac from "./views/TransformAgrobac.vue";
import CultivoAgrobac from "./views/CultivoAgrobac.vue";
import TransformNuclear from "./views/TransformNuclear.vue";
import RegeneracaoPlanta from "./views/RegeneracaoPlanta.vue";
import TriagemPlanta from "./views/TriagemPlanta.vue";
import JanelaQuestao from "./components/JanelaQuestao.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/',
    name: 'BemVindo',
    component: BemVindo},
    {path: '/1',
    name: '1',
    component: EscolhaVia},
    {path: '/2',
    name: '2',
    component: ConstrucaoVetor},
    {path: '/3',
    name: '3',
    component: TransformAgrobac},
    {path: '/4',
    name: '4',
    component: CultivoAgrobac},
    {path: '/5',
    name: '5',
    component: TransformNuclear},
    {path: '/6',
    name: '6',
    component: RegeneracaoPlanta},
    {path: '/7',
    name: '7',
    component: TriagemPlanta},
    {path: '/sobre',
    name: 'Sobre',
    component: SobreTrabalho}
  ]
})

createApp(App)
.component('RouterLink', RouterLink)
.component('JanelaQuestao', JanelaQuestao)
.use(router)
.mount("#app");

