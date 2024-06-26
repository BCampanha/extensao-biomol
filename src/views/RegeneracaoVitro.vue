<template>
  <div>
    <JanelaQuestao titulo="Regeneração in vitro" orientacoes="Para a regeneração in vitro, prepare um meio de cultura com antibiótico (como higromicina ou kanamicina), que revelará as células transgênicas por causa do gene de seleção. E adicione auxina e citocinina, que são hormônios produzidos pelas plantas, para promover o crescimento e diferenciação das células transformadas.">
        <template #principal>
          <div class="imagens">
            <Transition>
              <img src="../assets/reg-1.png" />
            </Transition>
            <Transition>
              <img src="../assets/reg-2.png" v-if="antibiotico"/>  
            </Transition>
            <Transition>
              <img src="../assets/reg-3.png" v-if="folhasNum==3"/> 
            </Transition>
            <Transition>
              <img src="../assets/reg-4.png" v-if="folhasNum==4"/> 
            </Transition>
            <Transition>
              <img src="../assets/reg-5.png" v-if="folhasNum==5"/> 
            </Transition>
            <Transition>
              <img src="../assets/reg-6.png" v-if="raizesNum==6" class="raiz"/>
            </Transition>
            <Transition>
              <img src="../assets/reg-7.png" v-if="raizesNum==7" class="raiz"/>
            </Transition>
            <Transition>
              <img src="../assets/reg-8.png" v-if="raizesNum==8" class="raiz"/>
            </Transition>
          </div>
        </template>
        <template #ferramentas>
          <div class="col">
            <button @click="antibiotico = true">
              antibiótico
            </button>
            <button @click="maisRaizes">
              auxina
            </button>
            <button @click="maisFolhas">
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
      raizesNum: 5,
      folhasNum: 2,
      antibiotico: false
    }
  },
  methods: {
    maisFolhas() {
      if (this.antibiotico && this.folhasNum < 5) {
        this.folhasNum += 1
      }
    },
    maisRaizes() {
      if (this.antibiotico && this.raizesNum < 8) {
        this.raizesNum += 1
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  display: flex;
  flex-direction: column;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.imagens {
  position: relative;
  img {
    max-width: 80vw;
    height: 300px;
  }
  img:not(:first-child) {
    position: absolute;
    top: 0
  }
  .raiz {
    z-index: 5000
  }
}
</style>
