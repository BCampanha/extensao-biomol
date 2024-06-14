<template>
  <div>
    <JanelaQuestao titulo="Construindo o vetor" orientacoes="Considerando o método de transformação escolhido, construa um vetor de expressão que esteja adequado ao método.">
      <template #principal>
        <hr />
        <div class="blocos">
          <div class="bloco-vetor" v-for="bloco in blocos" :key="bloco.nome">
            {{ bloco.nomebloco }}
          </div>
        </div>
      </template>
      <template #ferramentas>
        <p>Complete o vetor de transformação do plasmídeo Ti</p>
        <div class="elementos">
          <button
            v-for="opcao in opcoes"
            :key="opcao.nome"
            @click="selecionado(opcao)"
          >
            {{ opcao.nome }}
          </button>
        </div>
        <div>
          <button @click="undo()">Desfazer</button>
          <button @click="reset()">Reset</button>
          <button @click="foiConcluido()">Concluído</button>
        </div>
      </template>
    </JanelaQuestao>
  </div>
</template>

<script>

export default {
  name: "ConstrucaoVetor",
  data() {
    return {
      blocos: [],
      opcoes: [
        {
          nome: "Origem de replicação Agrobacterium",
          nomebloco: "Ori Agro",
        },
        {
          nome: "Origem de replicação E. coli",
          nomebloco: "Ori E. coli",
        },
        {
          nome: "Left Border",
          nomebloco: "LB",
        },
        {
          nome: "Promotor de transcrição",
          nomebloco: "P",
        },
        {
          nome: "Gene de interesse",
          nomebloco: "Gene",
        },
        {
          nome: "Terminador de transcrição",
          nomebloco: "T",
        },
        {
          nome: "Marcador de seleção",
          nomebloco: "SEL",
        },
        {
          nome: "Right Border",
          nomebloco: "RB",
        },
      ],
    };
  },
  methods: {
    selecionado(opcao) {
      this.blocos.push(opcao);
    },
    undo() {
      this.blocos.pop();
    },
    reset() {
      this.blocos = [];
    },
    foiConcluido() {
      
    },
  },
};
</script>

<style lang="scss" scoped>
.blocos {
  display: flex;
  .bloco-vetor {
    max-width: fit-content;
    border: 1px solid mediumorchid;
    padding: 0.5rem;
  }
}
.elementos {
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 1vh;
    padding: 0.5rem;
  }
}
</style>
