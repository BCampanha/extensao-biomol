<template>
  <div>
    <JanelaQuestao :titulo="`Transformação por ${selecaoVia.nome}`" :orientacoes="orientacoes">
      <template #principal>
        <div v-if="biob" class="h-[85vw] sm:h-[52vh] relative">
          <Transition>
            <img src="../assets/gene-gun-0.png" v-show="imagemInicial" alt="Máquina com compartimento vazio" class="absolute left-1/2 -translate-x-1/2 top-0 rounded-lg border-2 sm:h-[50vh]"/>
          </Transition>
          <Transition>
            <img src="../assets/gene-gun-1.png" v-show="petriAdicionado" alt="Máquina com placa de petri dos explantes" class="absolute left-1/2 -translate-x-1/2 top-0 rounded-lg border-2 sm:h-[50vh]"/>
          </Transition>
          <Transition>
            <img src="../assets/gene-gun-2.png" v-show="discoAdicionado" alt="Máquina com placa de petri e disco de partículas" class="absolute  left-1/2 -translate-x-1/2 top-0 rounded-lg border-2 sm:h-[50vh]"/>
          </Transition>
          <Transition>
            <img src="../assets/gene-gun-3.png" v-show="maquinaLigada" alt="O botão da máquina é alterado para ligá-la" class="absolute  left-1/2 -translate-x-1/2 top-0 rounded-lg border-2 sm:h-[50vh]"/>
          </Transition>
        </div>
        <div class="flex justify-center" v-if="agro">
          <div>
          <img src="../assets/cocultivo-4.png" class="mx-auto rounded-lg border-2 mb-4"/>
          <div v-if="!indutor">
            <img class="md:w-auto w-[80vw] mx-auto" src="../assets/cocultivo-1.png"/>
            <p class="mt-2">B- Tecido das plantas</p>
          </div>
          <Transition>
            <div v-if="indutor">
              <img class="md:w-auto w-[80vw] mx-auto" src="../assets/cocultivo-3.png"/>
              <p class="mt-2">C, D - Infecção e co cultivo</p>
            </div>
          </Transition>
          <small><p>Xu, D., et. al Agrobacterium-Mediated Genetic Transformation doi:10.3791/61665 (2020).</p></small>
        </div>
      </div>
        </template>
        <template #ferramentas>
          <div class="mt-4 flex flex-col items-center justify-center" v-if="biob">
            <div class="flex sm:flex-row flex-col">
              <button class="p-2 rounded bg-verde-escuro text-white mx-3 my-1" @click="adicionaPetri()"><i class="fa-solid fa-microscope"></i> Placa de Petri com as folhas da planta</button>
              <button class="p-2 rounded bg-verde-escuro text-white mx-3 my-1" @click="adicionaDisco()"><i class="fa-solid fa-dna"></i> Disco com partículas</button>
              <button class="p-2 rounded bg-verde-escuro text-white mx-3 my-1" @click="ligaMaquina()"><i class="fa-solid fa-power-off"></i> Ligar</button>
            </div>
            <div>
              <p class="text-orange-700 border-l-4 border-orange-500 bg-orange-100 p-2 mt-2" v-if="erro">{{ erro }}</p>
            </div>
          </div>
          <div class="flex justify-center mt-4" v-if="agro">
            <button class="p-2 rounded bg-verde-escuro text-white" @click="indutor=true">Acetoseringona - <em> indutor da virulência</em></button>
          </div>
        </template>
    </JanelaQuestao>
  </div>
</template>

<script>

export default {
  name: "TransformacaoProcesso",
  data() {
    return {
      orientacoes: '',
      erro: '',
      biob: false,
      agro: false,
      imagemInicial: true,
      petriAdicionado: false,
      discoAdicionado: false,
      maquinaLigada: false,
      indutor: false
    }
  },
  props: {
    selecaoVia: {
      type: Object,
      required: true
    }
  },
  methods: {
    adicionaPetri() {
      this.erro = ''
      this.petriAdicionado = true
    },
    adicionaDisco() {
      if(this.petriAdicionado) {
        this.discoAdicionado = true
      }
    },
    ligaMaquina() {
      this.erro = ''
      if (this.petriAdicionado && this.discoAdicionado) {
        this.imagemInicial = false
        this.maquinaLigada = true
      }
      else {
        this.erro = 'Primeiro, coloque a placa de petri e o disco de partículas na máquina'
      }
    }
  },
  mounted() {
    switch (this.selecaoVia.id) {
      case 'AGRO':
        this.agro = true;
        this.orientacoes = "Agora, co-cultive a agrobactéria com os explantes vegetais para transferir o DNA."
        break;
      case 'BIOB':
        this.biob = true;
        this.src = 'gene-gun-1.png'
        this.orientacoes = "Esta máquina, conhecida como acelerador de partículas, utiliza micropartículas impulsionadas em alta velocidade para introduzir o DNA com o gene de interesse dentro das células. As partículas revestidas com DNA do plasmídeo irão penetrar na parede e na membrana celular, permitindo que o DNA seja incorporado no genoma celular das folhas de feijão. Coloque as partículas revestidas na câmara e dispare a máquina."
        break; 
      default:
        this.$router.push('/1')
        break;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0.8;
}
</style>
