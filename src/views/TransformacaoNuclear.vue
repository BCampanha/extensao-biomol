<template>
  <div>
    <JanelaQuestao titulo="Transformação Nuclear" orientacoes="A célula hospedeira integra o T-DNA ao seu genoma utilizando sua própria maquinaria.">
      <template #principal>
        <img src="../assets/transformacao-nuclear.jpg" alt="Transformação nuclear." class="mx-auto">
        <div class="flex justify-center py-2">
          <small>https://www.sigmaaldrich.com/BR/pt/products/molecular-biology-and-functional-genomics/cloning-and-expression/molecular-cloning-and-protein-expression</small>
        </div>
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
