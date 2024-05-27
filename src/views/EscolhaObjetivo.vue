<template>
  <div>
    <JanelaQuestao titulo="Escolha do objetivo">
      <template #ferramentas>
        <p>Qual será o objetivo da transformação gênica?</p>
        <div v-for="opcao in opcoes" :key="opcao.id">
          <input
            type="radio"
            :id="opcao.id"
            :value="opcao"
            v-model="selecionado"
            @change="foiSelecionado"
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
  name: "EscolhaObjetivo",
  components: {
    JanelaQuestao,
  },
  data() {
    return {
      selecionado: "",
      opcoes: [
        {
          id: "ACAO",
          nome: "Saber onde uma proteína atua",
        },
        {
          id: "FUNCAO",
          nome: "Saber a função de uma proteína",
        },
        {
          id: "FENOTIPO",
          nome: "Induzir um fenótipo na planta (ex. Resistência)",
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

<style lang="scss" scoped>
.blocos {
  display: flex;
  .bloco-vetor {
    max-width: fit-content;
    border: 1px solid mediumorchid;
    padding: 0.5rem;
    margin-right: 1vw;
  }
}
.botoes {
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 1vh;
    padding: 0.5rem;
  }
}
</style>
