<template>
  <div>
    <JanelaQuestao titulo="Transformação em Agrobacterium" orientacoes="Cultivo de Agrobacterium Indução dos genes de transferência vir com
        acetoceringona">
      <template #ferramentas>
        <button @click="foiConcluido()">Ação</button>
      </template>
    </JanelaQuestao>
  </div>
</template>

<script>
export default {
  name: "TransformAgrobac",
  methods: {
    foiConcluido() {
      this.$emit("foiConcluido");
    },
  },
};
</script>

<style lang="scss" scoped></style>
