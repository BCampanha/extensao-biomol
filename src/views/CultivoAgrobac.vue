<template>
  <div>
    <JanelaQuestao titulo="Co-cultivo de Agrobacterium e explante">
      <template #orientacoes>
        Escolha do tecido vegetal Extração do explante (células feridas)
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
};
</script>

<style lang="scss" scoped></style>
