<template>
  <div class="app">
    <img
      @click="pagina = !pagina"
      class="logo"
      alt="Fita dupla de DNA"
      src="./assets/dna.png"
    />
    <form @submit.prevent="" @keydown.enter="proxima()" v-if="pagina === true">
      <EscolhaVia v-if="questao === 1" @foiSelecionado="validaVia" />
      <EscolhaObjetivo v-if="questao === 2" @foiSelecionado="validaObjetivo" />
      <ConstrucaoVetor v-if="questao === 3" @foiConcluido="validaConstrucao" />
      <TransformAgrobac v-if="questao === 4" @foiConcluido="valida" />
      <CultivoAgrobac v-if="questao === 5" @foiConcluido="valida" />
      <TransformNuclear v-if="questao === 6" @foiConcluido="valida" />
      <RegeneracaoPlanta v-if="questao === 7" @foiConcluido="valida" />
      <TriagemPlanta v-if="questao === 8" @foiConcluido="valida" />
      <div class="botao-direita" v-on:keyup.enter="proxima">
        <button :disabled="questao === 1" @click="anterior()">Anterior</button>
        <button :disabled="!validado" @click="proxima()">Próxima</button>
      </div>
    </form>
    <SobreTrabalho v-if="pagina === false" />
  </div>
</template>

<script>
import SobreTrabalho from "./views/SobreTrabalho.vue";
import EscolhaVia from "./views/EscolhaVia.vue";
import EscolhaObjetivo from "./views/EscolhaObjetivo.vue";
import ConstrucaoVetor from "./views/ConstrucaoVetor.vue";
import TransformAgrobac from "./views/TransformAgrobac.vue";
import CultivoAgrobac from "./views/CultivoAgrobac.vue";
import TransformNuclear from "./views/TransformNuclear.vue";
import RegeneracaoPlanta from "./views/RegeneracaoPlanta.vue";
import TriagemPlanta from "./views/TriagemPlanta.vue";

export default {
  name: "App",
  data() {
    return {
      pagina: true,
      questao: 1,
      validado: false,
      selecaoVia: {},
      selecaoObjetivo: {},
      blocos: {},
    };
  },
  components: {
    SobreTrabalho,
    EscolhaVia,
    EscolhaObjetivo,
    ConstrucaoVetor,
    TransformAgrobac,
    CultivoAgrobac,
    TransformNuclear,
    RegeneracaoPlanta,
    TriagemPlanta,
  },
  methods: {
    anterior() {
      this.questao -= 1;
    },
    proxima() {
      if (this.validado) {
        this.questao += 1;
      }
      this.validado = false;
    },
    validaVia(selecao) {
      this.valida();
      this.selecaoVia = selecao;
    },
    validaObjetivo(selecao) {
      this.valida();
      this.selecaoObjetivo = selecao;
    },
    validaConstrucao(blocos) {
      this.valida();
      this.blocos = blocos;
    },
    valida() {
      this.validado = true;
    },
  },
};
</script>

<style scoped>
.logo {
  height: 8vh;
  cursor: pointer;
}
.botao-direita {
  text-align: end;
  padding-right: 0.2rem;
}
@media screen and (max-width: 992px) {
  .logo {
    height: 5vh;
  }
}
</style>

<style>
#app .app {
  font-family: "Rubik", sans-serif; /* "Montserrat", sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  height: 98vh;
  width: 97vw;
}
a {
  font-weight: 600;
  color: mediumseagreen;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 1rem 0;
}
strong {
  font-weight: 600;
}
input,
label {
  cursor: pointer;
}
button {
  font-family: inherit;
  font-size: inherit;
}
</style>
