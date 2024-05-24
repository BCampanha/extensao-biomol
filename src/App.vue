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
      <div class="botao-direita">
        <button :disabled="questao === 1" @click="anterior()">Anterior</button>
        <button :disabled="!validado" @click="proxima()">Próxima</button>
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
      selecao: "",
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
    valida(selecao) {
      this.validado = true;
      this.selecao = selecao;
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
input,
label {
  cursor: pointer;
}
button {
  font-family: inherit;
  font-size: inherit;
}
</style>
