<template>
  <div class="app">
    <img
      @click="pagina = !pagina"
      class="logo"
      alt="Fita dupla de DNA"
      src="./assets/dna.png"
    />
    <section v-if="pagina === true">
      <QuestaoUm v-if="questao === 1" @foiSelecionado="valida" />
      <QuestaoDois v-if="questao === 2" />
      <div class="botao-prox">
        <button :disabled="questao === 1" @click="anterior()">Anterior</button>
        <button :disabled="questao >= 2 || !validado" @click="proxima()">
          Próxima
        </button>
      </div>
    </section>
    <SobreTrabalho v-if="pagina === false" />
  </div>
</template>

<script>
import SobreTrabalho from "./views/SobreTrabalho.vue";
import QuestaoUm from "./views/QuestaoUm.vue";
import QuestaoDois from "./views/QuestaoDois.vue";

export default {
  name: "App",
  data() {
    return {
      pagina: true,
      questao: 1,
      validado: false,
    };
  },
  components: {
    SobreTrabalho,
    QuestaoUm,
    QuestaoDois,
  },
  methods: {
    anterior() {
      this.questao -= 1;
    },
    proxima() {
      this.questao += 1;
      this.validado = false;
    },
    valida(booleano) {
      this.validado = booleano;
    },
  },
};
</script>

<style scoped>
.logo {
  height: 8vh;
}
.botao-prox {
  text-align: end;
  padding-right: 0.2rem;
}
</style>

<style>
#app .app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  height: 100vh;
  width: 100%;
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
</style>
