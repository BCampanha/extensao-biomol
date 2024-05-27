<template>
  <div>
    <JanelaQuestao titulo="Transformação nuclear">
      <template #orientacoes>
        Espera-se que Agrobacterium infecte as células através da ferida e
        transfira o DNA com o gene de interesse para o núcleo. A célula
        hospedeira integra o TDNA ao seu genoma utilizando sua própria
        maquinaria.
      </template>
    </JanelaQuestao>
  </div>
</template>

<script>
import JanelaQuestao from "../components/JanelaQuestao.vue";
export default {
  name: "TransformNuclear",
  components: {
    JanelaQuestao,
  },
};
</script>

<style lang="scss" scoped></style>
