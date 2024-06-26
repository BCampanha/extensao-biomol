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
            <small><p>Belide, S., Vanhercke, T., Petrie, J.R. et al. Robust genetic transformation of sorghum (Sorghum bicolor L.) using differentiating embryogenic callus induced from immature embryos. Plant Methods 13, 109 (2017). https://doi.org/10.1186/s13007-017-0260-9</p></small>
          </div>
        </template>
        <template #ferramentas>
          <div class="flex justify-center mt-4">
            <button class="p-2 mx-2 rounded bg-verde-escuro text-white" @click="addAntibiotico">
              Antibiótico
            </button>
            <button class="p-2 mx-2 rounded bg-verde-escuro text-white" @click="maisFolhas">
              Citocinina
            </button>
            <button class="p-2 mx-2 rounded bg-verde-escuro text-white" @click="maisRaizes">
              Auxina
            </button>
          </div>
          <p if="aviso">{{ aviso }}</p>
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
      aviso: '',
      antibiotico: false
    }
  },
  methods: {
    addAntibiotico() {
      this.aviso = ''
      this.antibiotico = true
    },
    maisFolhas() {
      this.aviso = ''
      if (this.antibiotico) {
        if(this.folhasNum < 5) {
        this.folhasNum += 1
        }
        else {
          this.aviso = 'Quantidade suficiente de folhas!'
        }
      } else {
        this.aviso = 'Coloque o antibiótico primeiro'
      }
    },
    maisRaizes() {
      this.aviso = ''
      if (this.antibiotico) {
          if (this.raizesNum < 8) {
          this.raizesNum += 1
        }
        else {
          this.aviso = 'Quantidade suficiente de raízes!'
        }
      } else {
          this.aviso = 'Coloque o antibiótico primeiro'
        }
    }
  }
};
</script>

<style lang="scss" scoped>
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
