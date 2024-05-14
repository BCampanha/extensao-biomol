<template>
  <div class="janela">
    <div class="bloco orientacoes">
      <slot name="orientacoes"
        ><em>Este é um bloco para orientações sobre a questão.</em></slot
      >
    </div>

    <div class="bloco tela-principal">
      <slot name="principal"
        ><em>Este bloco é a tela principal da simulação.</em></slot
      >
    </div>

    <div class="bloco ferramentas">
      <slot name="ferramentas"
        ><em>Este é um bloco de ferramentas/ações.</em></slot
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "JanelaQuestao",
};
</script>

<style lang="scss" scoped>
.janela {
  display: grid;
  grid-template-columns: 20vw 50vw 25vw;
  grid-template-rows: 85vh;
  margin-top: 2vh;
  .bloco {
    padding: 1rem;
    margin: 0.5vw;
    background-color: rgb(238, 238, 238);
    border-radius: 10px;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
@media screen and (max-width: 992px) {
  .janela {
    display: grid;
    grid-template-rows: 18vh 45vh 25vh;
    grid-template-columns: 98vw;
    .bloco {
      padding: 0.5rem;
    }
  }
}

em {
  margin-bottom: 0.5rem;
}
</style>
