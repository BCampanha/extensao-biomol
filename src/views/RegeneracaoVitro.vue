<template>
  <div>
    <JanelaQuestao titulo="Regeneração in vitro" orientacoes="Para a regeneração in vitro, prepare um meio de cultura com antibiótico (como higromicina ou kanamicina), que revelará as células transgênicas por causa do gene de seleção. E adicione auxina e citocinina, que são hormônios produzidos pelas plantas, para promover o crescimento e diferenciação das células transformadas.">
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
          <div class="flex justify-center">
            <button class="p-2 mx-2 rounded bg-verde-escuro text-white" @click="antibiotico = true">
              Antibiótico
            </button>
            <button class="p-2 mx-2 rounded bg-verde-escuro text-white" @click="raizes += 1">
              Auxina
            </button>
            <button class="p-2 mx-2 rounded bg-verde-escuro text-white" @click="folhas += 1">
              Citocinina
            </button>
          </div>
        </template>
    </JanelaQuestao>
  </div>
</template>

<script>
export default {
  name: "RegeneracaoVitro",
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
</style>
