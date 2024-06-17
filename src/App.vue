<template>

  <div class="app bg-verde-escuro h-screen flex flex-col items-center">
  <header class="flex items-center justify-center py-3 bg-verde-escuro">
    <RouterLink to="/" class="text-white mx-5 text-xl font-bold">Jogo</RouterLink>
    <RouterLink to="/"><img class="size-16" alt="Fita dupla de DNA" src="./assets/dna.png"></RouterLink>
    <RouterLink to="/sobre" class="text-white mx-5 text-xl font-bold">Sobre</RouterLink>
  </header>
    <div class="bg-creme w-11/12 p-5 rounded mt-5">
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
