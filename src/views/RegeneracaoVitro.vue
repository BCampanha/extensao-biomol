<template>
  <div>
    <JanelaQuestao titulo="Regeneração in vitro" orientacoes="Para a regeneração in vitro, prepare um meio de cultura com antibiótico (como higromicina ou kanamicina), que revelará as células transgênicas por causa do gene de seleção. E adicione auxina e citocinina, que são hormônios produzidos pelas plantas, para promover o crescimento e diferenciação das células transformadas.">
        <template #principal>
          <div class="imagens">
            <Transition>
              <img src="../assets/reg-1.png" v-if="!antibiotico" alt="Imagem das folhas cortadas"/>
            </Transition>
            <Transition>
              <img src="../assets/reg-2.png" v-if="antibiotico" alt="Algumas folhas morrem"/>
            </Transition>
          </div>
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
.col {
  display: flex;
  flex-direction: column;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.imagens {
  position: relative;
  img {
    max-width: 80vw;
  }
  img:not(:first-child) {
    position: absolute;
    top: 0
  }
}
</style>
