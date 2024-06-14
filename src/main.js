import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

import EscolhaVia from "./views/EscolhaVia.vue";
import SobreTrabalho from "./views/SobreTrabalho.vue";
import EscolhaObjetivo from "./views/EscolhaObjetivo.vue";
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
    name: '1',
    component: EscolhaVia},
    {path: '/2',
    name: '2',
    component: EscolhaObjetivo},
    {path: '/3',
    name: '3',
    component: ConstrucaoVetor},
    {path: '/4',
    name: '4',
    component: TransformAgrobac},
    {path: '/5',
    name: '5',
    component: CultivoAgrobac},
    {path: '/6',
    name: '6',
    component: TransformNuclear},
    {path: '/7',
    name: '7',
    component: RegeneracaoPlanta},
    {path: '/8',
    name: '8',
    component: TriagemPlanta},
    {path: '/sobre',
    name: 'Sobre',
    component: SobreTrabalho}
  ]
})

createApp(App)
.component('JanelaQuestao', JanelaQuestao)
.use(router)
.mount("#app");

