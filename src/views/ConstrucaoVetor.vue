<template>
  <div>
    <JanelaQuestao
      :titulo="`Construção do vetor de expressão gênica - ${selecaoVia.nome}`"
      orientacoes="O plasmídeo é uma pequena molécula de DNA circular, separada do DNA cromossômico, encontrada em bactérias. Ele servirá como um veículo para carregar seu gene para as células-alvo. Considerando o método de transformação escolhido, construa um vetor de expressão que esteja adequado ao método."
      :exibirAjuda="true"
    >
      <template #ajuda>
        <img src="../assets/vetor-biob.png" alt="Resposta de biob" v-if="selecaoVia.id==='BIOB'"/>
        <img src="../assets/vetor-agro.png" alt="Resposta de agro" v-if="selecaoVia.id==='AGRO'"/>
      </template>

      <template #principal>
        <img src="../assets/vetor-vazio.png" alt="Vetor vazio"/>

        <div class="blocos">
          <div class="bloco-vetor" v-for="bloco in blocos" :key="bloco.nome">
            {{ bloco.nomebloco }}
          </div>
        </div>

        <div v-if="erro">
          {{ erro }}
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
            {{ opcao.nome }} ({{ opcao.nomebloco }})
          </button>
        </div>
        <div>
          <button @click="undo()">Desfazer</button>
          <button @click="reset()">Reset</button>
          <button @click="foiConcluido()">Verificar</button>
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
      erro: '',
      gabarito: [],
      blocos: [],
      opcoes: [],
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
          nome: "Gene de interesse",
          nomebloco: "BTTX",
          ordem: 4,
        },
        {
          nome: "Marcador de seleção",
          nomebloco: "SEL",
          ordem: 5,
        },
        {
          nome: "Right Border",
          nomebloco: "RB",
          ordem: 6,
        },
      ],
      opcoesBiob: [
        {
          nome: "Origem de replicação",
          nomebloco: "Ori",
          ordem: 1,
        },
        {
          nome: "Gene de interesse",
          nomebloco: "Gene",
          ordem: 2,
        },
        {
          nome: "Marcador de seleção",
          nomebloco: "SEL",
          ordem: 3,
        },
        {
          nome: "Região de virulência",
          nomebloco: "VIR",
          ordem: 4,
        },
      ],
    };
  },
  mounted() {
    switch (this.selecaoVia.id) {
      case 'BIOB':
        this.opcoes = this.opcoesBiob
        this.gabarito = [1,2,3,4,5]
        break;
      case 'AGRO':
        this.opcoes = this.opcoesAgro
        this.gabarito = [1,2,3,4,5,6,7,8]
        break;
      default:
        this.$router.push('/1')
        break;
    }
  },
  methods: {
    selecionado(opcao) {
      if (this.blocos.length < this.gabarito.length) {
        this.blocos.push(opcao);
      }
      else {
        this.erro = 'qtde max de componentes'
      }
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
          if (ordens.indexOf(i) !== this.gabarito.indexOf(i)) {
              this.erro = "erro na posição " + i
              return
          }
      }

      this.erro = "certo!"
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
