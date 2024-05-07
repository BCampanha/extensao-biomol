<template>
  <ul class="navegacao">
    <li><button @click="pagina=0" :class="{'ativo' : pagina===0 }">Sobre</button></li>
    <li><button @click="pagina=1" :class="{'ativo' : pagina===1 }">Simulador</button></li>
  </ul>
  <img class="logo" alt="Fita dupla de DNA" src="./assets/dna.png">
  <SobreTrabalho v-if="pagina===0"/>
  <JanelaSimulador v-if="pagina===1"/>
</template>

<script>
import SobreTrabalho from './views/SobreTrabalho.vue'
import JanelaSimulador from './views/JanelaSimulador.vue'

export default {
  name: 'App',
  data() {
    return {
      pagina: 0
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
li {
  display: inline-block;
}
.ativo {
  background-color: white;
  color: #333;
  border: 1px solid #333;
  border-bottom: white;
}
.navegacao {
  align-self: start;
  margin-left: 10px;
}
button {
  padding: 0.5rem 1rem;
  background-color: #333;
  color: white;
  border-style: none;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom: none;
}
button:hover{
  background-color: black;
  color: white
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
  margin: 10px 0;
}
</style>
