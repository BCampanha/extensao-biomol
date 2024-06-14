<template>
  <div class="app">
    <header>
      <RouterLink to="/">
        <img
          class="logo"
          alt="Fita dupla de DNA"
          src="./assets/dna.png"
        >
      </RouterLink>
      <RouterLink to="/">Jogo</RouterLink>
      <RouterLink to="/sobre">Sobre</RouterLink>
    </header>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      validado: false,
      selecaoVia: {},
      selecaoObjetivo: {},
      blocos: {},
    };
  },
  methods: {
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
  position: fixed;
  bottom: 1vh;
  right: 1vh;
  z-index: 10;
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
