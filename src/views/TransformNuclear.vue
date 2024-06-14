<template>
  <div>
    <JanelaQuestao titulo="Transformação nuclear" orientacoes="Espera-se que Agrobacterium infecte as células através da ferida e
        transfira o DNA com o gene de interesse para o núcleo. A célula
        hospedeira integra o TDNA ao seu genoma utilizando sua própria
        maquinaria.">
      <template #ferramentas>
        <button @click="foiConcluido()">Ação</button>
      </template>
    </JanelaQuestao>
  </div>
</template>

<script>
export default {
  name: "TransformNuclear",
  methods: {
    foiConcluido() {
      this.$emit("foiConcluido");
    },
  },
};
</script>

<style lang="scss" scoped></style>
