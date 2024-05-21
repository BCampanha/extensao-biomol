<template>
  <div>
    <JanelaQuestao>
      <template #orientacoes>
        Complete o vetor de transformação do plasmídeo Ti
      </template>
      <template #principal>
        <hr />
        <div class="bloco-vetor" v-for="bloco in blocos" :key="bloco.nome">
          {{ bloco.nomebloco }}
        </div>
      </template>
      <template #ferramentas>
        <button
          v-for="opcao in opcoes"
          :key="opcao.nome"
          @click="selecionado(opcao)"
        >
          {{ opcao.nome }}
        </button>
      </template>
    </JanelaQuestao>
  </div>
</template>

<script>
import JanelaQuestao from "../components/JanelaQuestao.vue";

export default {
  name: "QuestaoDois",
  components: {
    JanelaQuestao,
  },
  data() {
    return {
      blocos: [],
      opcoes: [
        {
          nome: "Origem de replicação agrobacterium",
          nomebloco: "Ori Agro",
        },
      ],
    };
  },
  methods: {
    selecionado(opcao) {
      this.blocos.push(opcao);
    },
  },
};
</script>

<style lang="scss" scoped>
.bloco-vetor {
  max-width: fit-content;
  border: 1px solid mediumorchid;
  padding: 0.5rem;
}
</style>
