<template>
  <div>
    <JanelaQuestao>
      <template #orientacoes>
        Selecione a <strong>via de transformação gênica</strong> que você
        gostaria de simular.
      </template>
      <template #principal>
        <img
          src="../assets/metodos-2.jpg"
          alt="Esquema de transformação gênica por Agrobacterium e por biobalística"
        />
        <p>{{ selecionado }}</p>
      </template>
      <template #ferramentas>
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
