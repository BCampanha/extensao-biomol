<template>
  <div>
    <JanelaQuestao titulo="Regeneração in vitro" orientacoes="Para a regeneração in vitro, prepare um meio de cultura com antibiótico (como higromicina ou kanamicina), e adicione auxina e citocinina para promover o crescimento e diferenciação das células transformadas.">
        <template #principal>
          <span v-if="!antibiotico"> Imagem das folhas cortadas </span>
          <span v-if="antibiotico"> Algumas folhas morrem </span>
          <span v-for="i in folhas">
            folha
          </span>
          <span v-for="j in raizes">
            raiz
          </span>
        </template>
        <template #ferramentas>
          <div class="col">
            <button @click="antibiotico = true">
              antibiótico
            </button>
            <button @click="raizes += 1">
              auxina
            </button>
            <button @click="folhas += 1">
              citocinina
            </button>
          </div>
        </template>
    </JanelaQuestao>
  </div>
</template>

<script>
export default {
  name: "RegeneracaoPlanta",
  data() {
    return {
      raizes: 0,
      folhas: 0,
      antibiotico: false
    }
  },
};
</script>

<style lang="scss" scoped>
.col {
  display: flex;
  flex-direction: column;
}
</style>
