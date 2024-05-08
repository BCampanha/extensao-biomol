<template>
  <img
    class="logo"
    alt="Fita dupla de DNA"
    src="./assets/dna.png"
  >
  <JanelaSimulador v-if="pagina===true"/>
  <SobreTrabalho v-if="pagina===false"/>
  <footer class="navegacao">
    <button
      @click="pagina = !pagina"
    >
      {{ navegacao }}
    </button>
  </footer>
</template>

<script>
import SobreTrabalho from './views/SobreTrabalho.vue'
import JanelaSimulador from './views/JanelaSimulador.vue'

export default {
  name: 'App',
  data() {
    return {
      pagina: true
    }
  },
  components: {
    SobreTrabalho,
    JanelaSimulador
  },
  computed: {
    navegacao() {
      if (this.pagina) {
        return "Sobre"
      }
      return "Voltar ao simulador"
    }
  }
}
</script>

<style scoped>
.logo {
  height: 4rem;
}
.navegacao {
  position: absolute;
  bottom: 5%;
  button {
    border: none;
    text-decoration: underline;
    color: mediumseagreen;
    background-color: white;
    cursor: pointer
  }
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
  text-align: start;
  color: #333;
  margin-top: 60px;
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
