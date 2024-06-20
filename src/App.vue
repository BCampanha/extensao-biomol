<template>

  <div class="app  h-screen flex flex-col items-center bg-slate-50">
  <header class="flex items-center justify-center py-3 bg-verde-escuro w-screen shadow-lg">
    <RouterLink to="/" class="text-white mx-5 text-lg font-bold">Início</RouterLink>
    <RouterLink to="/"><img class="size-16 contrast-150 drop-shadow-lg" alt="Fita dupla de DNA" src="./assets/dna.png"></RouterLink>
    <RouterLink to="/sobre" class="text-white mx-5 text-lg font-bold">Sobre</RouterLink>
  </header>
    <div class="bg-creme w-11/12 p-5 rounded mt-5 shadow-lg">
      <RouterView @viaSelecionada="registraVia" :selecaoVia="selecaoVia"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selecaoVia: {},
    };
  },
  methods: {
    registraVia(selecao) {
      this.selecaoVia = selecao;
    }
  },
};
</script>
