<template>
  <div class="janela">

    <section class="bloco orientacoes">
      <em>Este é um bloco para orientações.</em>
      <p>Exemplo de seletor:</p>

      <div>
        <input type="radio" id="opcao1" value="Opção 1" v-model="selecionado" />
        <label for="opcao1">Via bombalística</label>
      </div>

      <div>
        <input type="radio" id="opcao2" value="Opção 2" v-model="selecionado" />
        <label for="opcao2">Agrobactéria</label>
      </div>

      <div class="botao-prox">
        <button>
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
      selecionado: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.janela {
  display: flex;  
  flex-direction: row;
  width: 90vw;
  height: 80vh;
  .bloco {
    padding: 1rem;
    margin: 0.2rem;
    background-color: rgb(238, 238, 238);
    display: flex;
    flex-direction: column;
  }
  .orientacoes {
    position: relative;
    min-width: 20%;
  }
  .tela-principal {
    min-width: 40%;
  }
  .ferramentas {
    min-width: 20%;
  }
}
.botao-prox {
  position: absolute;
  bottom: 5%;
  right: 5%;
}
@media screen and (max-width: 770px) {
  .janela {
    flex-direction: column;
    .tela-principal {
      min-height: 50%;
    }
  }
}
</style>