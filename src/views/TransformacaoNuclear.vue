<template>
  <div>
    <JanelaQuestao titulo="Transformação Nuclear" orientacoes="A célula hospedeira integra o TDNA ao seu genoma utilizando sua própria maquinaria.">
      <template #ferramentas>
        <button @click="foiConcluido()">Ação</button>
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
