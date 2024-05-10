<template>
  <img
    @click="pagina = !pagina"
    class="logo"
    alt="Fita dupla de DNA"
    src="./assets/dna.png"
  >
  <section v-if="pagina===true">
    <QuestaoUm v-if="questao===1"/>
    <QuestaoDois v-if="questao===2"/>
    <div class="botao-prox">
      <button :disabled="questao===1" @click="anterior()">
        Anterior
      </button>
      <button :disabled="questao>=2" @click="proxima()">
        Próxima
      </button>
    </div>
  </section>
  <SobreTrabalho v-if="pagina===false"/>
</template>

<script>
import SobreTrabalho from './views/SobreTrabalho.vue'
import QuestaoUm from './views/QuestaoUm.vue'
import QuestaoDois from './views/QuestaoDois.vue'

export default {
  name: 'App',
  data() {
    return {
      pagina: true,
      questao: 1,
    }
  },
  components: {
    SobreTrabalho,
    QuestaoUm,
    QuestaoDois
  },
  methods: {
    anterior() {
      this.questao -= 1
    },
    proxima() {
      this.questao += 1
    }
  }
}
</script>

<style scoped>
.logo {
  height: 4rem;
}
.botao-prox {
  text-align: end;
  padding-right: 0.2rem;
}
</style>

<style>
#app {
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
</style>
