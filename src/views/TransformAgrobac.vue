<template>
  <div>
    <JanelaQuestao titulo="Transformação em Agrobacterium">
      <template #orientacoes>
        Cultivo de Agrobacterium Indução dos genes de transferência vir com
        acetoceringona
      </template>
      <template #ferramentas>
        <button @click="foiConcluido()">Ação</button>
      </template>
    </JanelaQuestao>
  </div>
</template>

<script>
import JanelaQuestao from "../components/JanelaQuestao.vue";
export default {
  name: "TransformAgrobac",
  components: {
    JanelaQuestao,
  },
  methods: {
    foiConcluido() {
      this.$emit("foiConcluido");
    },
  }
};
</script>

<style lang="scss" scoped></style>
