<template>
  <div>
    <JanelaQuestao titulo="Construindo o vetor">
      <template #orientacoes>
        Plasmídios bacterianos são seqüências de DNA de fita dupla, com formato
        circular, que apresentam duplicação autônoma e carregam alguns genes.
        <br />
        O T-DNA faz parte do DNA plasmidial da agrobactéria e, por meio da
        engenharia genética, foi possível sua manipulação para a integração de
        genes de interesse. <br />
        Essa manipulação consiste, basicamente, na deleção dos genes oncogênicos
        (que causam o tumor) do T-DNA e a manutenção dos genes relacionados à
        transferência e à replicação do plasmídio, isto é, a região vir e as
        extremidades do T-DNA. <br />
        Com isso, produzem-se linhagens desarmadas, ou seja, ainda virulentas,
        mas não mais patogênicas. <br />
        Assim, genes de interesse podem ser introduzidos dentro da planta
        através de ligação com a região desarmada do T-DNA em substituição à
        região T-DNA original <br />
      </template>
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
import JanelaQuestao from "../components/JanelaQuestao.vue";

export default {
  name: "ConstrucaoVetor",
  components: {
    JanelaQuestao,
  },
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
      this.$emit("foiConcluido", this.blocos);
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
