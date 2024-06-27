<template>
  <div>
    <JanelaQuestao titulo="Transformação Nuclear" orientacoes="A célula hospedeira integra o T-DNA ao seu genoma utilizando sua própria maquinaria.">
      <template #principal>
        <span></span>
      </template>
      <template #ferramentas>
        <span></span>
      </template>
    </JanelaQuestao>
  </div>
</template>

<script>
export default {
  name: "TransformacaoNuclear",
  methods: {
    foiConcluido() {
      this.$emit("foiConcluido");
    },
  },
};
</script>

<style lang="scss" scoped></style>
