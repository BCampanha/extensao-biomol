<template>
  <div>
    <JanelaQuestao titulo="Triagem">
      <template #orientacoes> Análise molecular: Testes de PCR </template>
    </JanelaQuestao>
  </div>
</template>

<script>
import JanelaQuestao from "../components/JanelaQuestao.vue";
export default {
  name: "TriagemPlanta",
  components: {
    JanelaQuestao,
  },
};
</script>

<style lang="scss" scoped></style>
