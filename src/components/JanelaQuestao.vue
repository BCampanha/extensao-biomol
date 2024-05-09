<template>
  <div class="janela" v-if="questao===questaoAtual">
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
  name: 'JanelaQuestao',
  props: {
    questao: Number,
    questaoAtual: Number
  }
}
</script>

<style lang="scss">
.janela {
  display: grid;
  grid-template-columns: 20vw 50vw 20vw;
  grid-template-rows: 80vh 80vh 80vh;
  .bloco {
    padding: 1rem;
    margin: 0.2rem;
    background-color: rgb(238, 238, 238);
  }
  .ferramentas {
    position: relative;
    padding-bottom: 3rem;
  }
}
.botao-prox {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
@media screen and (max-width: 770px) {
  .janela {
    display: grid;
    grid-template-rows: 25vh 40vh 20vh;
    grid-template-columns: 90vw;
  }
}
</style>