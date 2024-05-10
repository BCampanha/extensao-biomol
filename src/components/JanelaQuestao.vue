<template>
  <div class="janela">
    <div class="bloco orientacoes">
      <em>Este é um bloco para orientações sobre a questão.</em>
        <slot name="orientacoes"></slot>
    </div>

    <div class="bloco tela-principal">
      <em>Este bloco é a tela principal da simulação.</em>
      <slot name="principal"></slot>
    </div>

    <div class="bloco ferramentas">
      <em>Este é um bloco de ferramentas/ações.</em>
      <slot name="ferramentas"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JanelaQuestao'
}
</script>

<style lang="scss" scoped>
.janela {
  display: grid;
  grid-template-columns: 20vw 50vw 25vw;
  grid-template-rows: 85vh;
  margin-top: 2vh;
  .bloco {
    padding: 1rem;
    margin: 0.2rem;
    background-color: rgb(238, 238, 238);
    border-radius: 10px;
  }
}
@media screen and (max-width: 992px) {
  .janela {
    display: grid;
    grid-template-rows: 20vh 40vh 25vh;
    grid-template-columns: 95vw;
  }
}
</style>