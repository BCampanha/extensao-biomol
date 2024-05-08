<template>
  <img
    @click="pagina = !pagina"
    class="logo"
    alt="Fita dupla de DNA"
    src="./assets/dna.png"
  >
  <JanelaSimulador v-if="pagina===true"/>
  <SobreTrabalho v-if="pagina===false"/>
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
  }
}
</script>

<style scoped>
.logo {
  height: 4rem;
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
  height: 100vh;
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
img {
  margin-bottom: 2rem;
}
</style>
