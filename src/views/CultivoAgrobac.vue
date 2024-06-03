<template>
  <div>
    <JanelaQuestao titulo="Co-cultivo de Agrobacterium e explante">
      <template #orientacoes>
        Escolha do tecido vegetal Extração do explante (células feridas)
      </template>
      <template #ferramentas>
        <button @click="foiConcluido()">Ação</button>
      </template>
    </JanelaQuestao>
  </div>
</template>

<script>
import JanelaQuestao from "../components/JanelaQuestao.vue";
export default {
  name: "CultivoAgrobac",
  components: {
    JanelaQuestao,
  },
  methods: {
    foiConcluido() {
      this.$emit("foiConcluido");
    },
  },
};
</script>

<style lang="scss" scoped></style>
