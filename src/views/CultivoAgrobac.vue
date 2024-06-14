<template>
  <div>
    <JanelaQuestao titulo="Co-cultivo de Agrobacterium e explante" orientacoes="Escolha do tecido vegetal Extração do explante (células feridas)">
      <template #ferramentas>
        <button @click="foiConcluido()">Ação</button>
      </template>
    </JanelaQuestao>
  </div>
</template>

<script>
export default {
  name: "CultivoAgrobac",
  methods: {
    foiConcluido() {
      this.$emit("foiConcluido");
    },
  },
};
</script>

<style lang="scss" scoped></style>
