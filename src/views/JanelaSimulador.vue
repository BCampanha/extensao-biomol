<template>
  <div class="janela">

    <section class="bloco orientacoes">
      <em>Este é um bloco para orientações.</em>

      <div v-if="questao===1">
        <p>Exemplo de seletor:</p>
  
        <div>
          <input type="radio" id="opcao1" value="Via bombalística" v-model="selecionado" />
          <label for="opcao1">Via bombalística</label>
        </div>
  
        <div>
          <input type="radio" id="opcao2" value="Agrobactéria" v-model="selecionado" />
          <label for="opcao2">Agrobactéria</label>
        </div>
      </div>

      <div v-if="questao===2">
        <p>
          Essa é uma orientação para {{ selecionado }}.
        </p>
      </div>

      <div v-if="questao>2">
        <p>
          Em construção.
        </p>
      </div>

      <div class="botao-prox">
        <button :disabled="questao===1" @click="questao -= 1">
          Anterior
        </button>
        <button :disabled="invalido" @click="questao += 1">
          Próxima
        </button>
      </div>
    </section>

    <section class="bloco tela-principal">
      <em>Este bloco é a tela principal.</em>
    </section>

    <section class="bloco ferramentas">
      <em>Este é o bloco interativo para ferramentas e opções.</em>
    </section>
    
  </div>
</template>

<script>
export default {
  name: 'JanelaSimulador',
  data() {
    return {
      selecionado: '',
      questao: 1
    }
  },
  computed: {
    invalido() {
      switch (this.questao) {
        case 1:
          return this.selecionado === ''
        default:
          return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.janela {
  display: grid;
  grid-template-columns: 20vw 50vw 20vw;
  grid-template-rows: 80vh 80vh 80vh;
  .bloco {
    padding: 1rem;
    margin: 0.2rem;
    background-color: rgb(238, 238, 238);
  }
  .orientacoes {
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