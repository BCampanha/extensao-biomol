import { createApp } from "vue";

import "./main.css"

import { RouterLink, createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

import BemVindo from "./views/BemVindo.vue";
import EscolhaVia from "./views/EscolhaVia.vue";
import SobreTrabalho from "./views/SobreTrabalho.vue";
import ConstrucaoVetor from "./views/ConstrucaoVetor.vue";
import TransformacaoProcesso from "./views/TransformacaoProcesso.vue";
import TransformacaoNuclear from "./views/TransformacaoNuclear.vue";
import RegeneracaoVitro from "./views/RegeneracaoVitro.vue";
import TriagemPlanta from "./views/TriagemPlanta.vue";
import FimObrigado from "./views/FimObrigado.vue";
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
    component: TransformacaoProcesso},
    {path: '/4',
    name: '4',
    component: TransformacaoNuclear},
    {path: '/5',
    name: '5',
    component: RegeneracaoVitro},
    {path: '/6',
    name: '6',
    component: TriagemPlanta},
    {path: '/7',
    name: '7',
    component: FimObrigado},
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

