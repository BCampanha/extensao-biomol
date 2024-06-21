<template>
  <div>
    <JanelaQuestao
      :titulo="`Construção do vetor de expressão gênica - ${selecaoVia.nome}`"
      orientacoes="Considerando o método de transformação escolhido, construa um vetor de expressão que esteja adequado ao método."
      :exibirAjuda="true"
    >
      <template #ajuda>
        <img src="../assets/vetor-biob.png" alt="Resposta de biob" v-if="selecaoVia.id==='BIOB'"/>
        <img src="../assets/vetor-agro.png" alt="Resposta de agro" v-if="selecaoVia.id==='AGRO'"/>
      </template>

      <template #principal>
        <img src="../assets/vetor-vazio.png" alt="Vetor vazio"/>
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
  props: {
    selecaoVia: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      blocos: [],
      opcoesAgro: [
        {
          nome: "Origem de replicação Agrobacterium",
          nomebloco: "Ori Agro",
          ordem: 1,
        },
        {
          nome: "Origem de replicação E. coli",
          nomebloco: "Ori E. coli",
          ordem: 2,
        },
        {
          nome: "Left Border",
          nomebloco: "LB",
          ordem: 3,
        },
        {
          nome: "Promotor de transcrição",
          nomebloco: "P",
          ordem: 4,
        },
        {
          nome: "Gene de interesse",
          nomebloco: "Gene",
          ordem: 5,
        },
        {
          nome: "Terminador de transcrição",
          nomebloco: "T",
          ordem: 6,
        },
        {
          nome: "Marcador de seleção",
          nomebloco: "SEL",
          ordem: 7,
        },
        {
          nome: "Right Border",
          nomebloco: "RB",
          ordem: 8,
        },
      ],
      opcoesBiob: [
        {
          nome: "Origem de replicação",
          nomebloco: "Ori",
          ordem: 1,
        },
        {
          nome: "Promotor de transcrição",
          nomebloco: "P",
          ordem: 2,
        },
        {
          nome: "Gene de interesse",
          nomebloco: "Gene",
          ordem: 3,
        },
        {
          nome: "Terminador de transcrição",
          nomebloco: "T",
          ordem: 4,
        },
        {
          nome: "Marcador de seleção",
          nomebloco: "SEL",
          ordem: 5,
        },
      ],
    };
  },
  computed: {
    opcoes() {
      switch (this.selecaoVia.id) {
        case 'BIOB':
          return this.opcoesBiob
        case 'AGRO':
          return this.opcoesAgro
        default:
          this.$router.push('/1')
      }
    }
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
      const ordens = this.blocos.map(el => el.ordem);

      for (let i = 1; i <= 8; i++) {
          if (ordens.indexOf(i) === -1) {
              console.log("false");
          }
      }

      console.log("true");
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
