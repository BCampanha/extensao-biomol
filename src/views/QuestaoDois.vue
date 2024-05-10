<template>
  <div>
    <JanelaQuestao>
      <template #ferramentas>
        <p>Outro exemplo de seletor.</p>
      </template>
    </JanelaQuestao>
  </div>
</template>

<script>
import JanelaQuestao from "../components/JanelaQuestao.vue";

export default {
  name: "QuestaoDois",
  components: {
    JanelaQuestao,
  },
};
</script>

<style lang="scss" scoped></style>
