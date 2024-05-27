<template>
  <div>
    <JanelaQuestao titulo="Regeneração">
      <template #orientacoes>
        Meio de Indução de brotos em um meio com antibiótico/herbicida
        (higromicina ou kanamicina) Meio de enraizamento
      </template>
    </JanelaQuestao>
  </div>
</template>

<script>
import JanelaQuestao from "../components/JanelaQuestao.vue";
export default {
  name: "RegeneracaoPlanta",
  components: {
    JanelaQuestao,
  },
};
</script>

<style lang="scss" scoped></style>
