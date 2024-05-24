<template>
  <div>
    <JanelaQuestao>
      <template #orientacoes>
        A transformação genética consiste na introdução controlada de um gene no
        genoma de uma célula receptora e em sua posterior expressão <br />
        Abre novas perspectivas ao melhoramento genético de espécies de plantas,
        disponibilizando novos genes com características desejáveis para serem
        incorporados em menor espaço de tempo. <br />
        Através do uso de estratégias com Agrobacterium e biobalística, já foram
        obtidas plantas transgênicas com maior produção de biomassa, melhor
        qualidade de madeira, maior resistência a determinados insetos e com
        tolerância a herbicidas, entre outras características de interesse.
      </template>
      <template #principal>
        <img
          src="../assets/metodos-2.jpg"
          alt="Esquema de transformação gênica por Agrobacterium e por biobalística"
        />
      </template>
      <template #ferramentas>
        <p>
          Selecione a <strong>via de transformação gênica</strong> que você
          gostaria de simular.
        </p>
        <div v-for="opcao in opcoes" :key="opcao.id">
          <input
            type="radio"
            :id="opcao.id"
            :value="opcao"
            v-model="selecionado"
            @click="foiSelecionado"
          />
          <label :for="opcao.id">{{ opcao.nome }}</label>
        </div>
      </template>
    </JanelaQuestao>
  </div>
</template>

<script>
import JanelaQuestao from "../components/JanelaQuestao.vue";

export default {
  name: "QuestaoUm",
  emits: ["foiSelecionado"],
  components: {
    JanelaQuestao,
  },
  data() {
    return {
      selecionado: "",
      show: true,
      opcoes: [
        {
          id: "BIOB",
          nome: "Via biobalística",
        },
        {
          id: "AGRO",
          nome: "Agrobacterium",
        },
      ],
    };
  },
  methods: {
    foiSelecionado() {
      this.$emit("foiSelecionado", this.selecionado);
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
}
</style>
