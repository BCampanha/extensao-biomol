<template>
  <div class="janela">
    <div class="bloco orientacoes">
        <slot name="orientacoes"></slot>
    </div>

    <div class="bloco tela-principal">
      <slot name="principal"></slot>
    </div>

    <div class="bloco ferramentas">
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
  grid-template-columns: 20vw 50vw 20vw;
  grid-template-rows: 80vh;
  .bloco {
    padding: 1rem;
    margin: 0.2rem;
    background-color: rgb(238, 238, 238);
  }
}
@media screen and (max-width: 770px) {
  .janela {
    display: grid;
    grid-template-rows: 25vh 40vh 20vh;
    grid-template-columns: 90vw;
  }
}
</style>