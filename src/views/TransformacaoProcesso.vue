<template>
  <div>
    <JanelaQuestao :titulo="`Transformação por ${selecaoVia.nome}`" :orientacoes="orientacoes" :exibirAjuda="true">
      <template #ajuda>
        <ImagemRef :src="'gene-gun-legenda.jpeg'" :referencia="''" v-if="biob"/>
      </template>
      <template #principal>
        <div v-if="biob" class="imagens">
          <Transition>
            <img src="../assets/gene-gun-0.png"/>
          </Transition>
          <Transition>
            <img src="../assets/gene-gun-1.png" v-show="petriAdicionado"/>
          </Transition>
          <Transition>
            <img src="../assets/gene-gun-2.png" v-show="discoAdicionado"/>
          </Transition>
          <Transition>
            <img src="../assets/gene-gun-3.png" v-show="maquinaLigada"/>
          </Transition>
        </div>
        </template>
        <template #ferramentas>
          <button @click="adicionaPetri()">Petri com folhas</button>
          <button @click="adicionaDisco()">Disco com partículas</button>
          <button @click="ligaMaquina()">Ligar</button>
          <p v-if="erro">{{ erro }}</p>
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
      maquinaLigada: false
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
        this.orientacoes = "A bactéria fitopatogênica, Agrobacterium tumefaciens, é um eficiente vetor natural para engenharia genética de plantas, tanto de dicotiledôneas como de monocotiledôneas. Durante o seu processo de infecção, essa bactéria do solo transfere, às células vegetais, parte de seu genoma, o T-DNA. Para isso, prepare a Agrobacterium tumefaciens com o vetor contendo o gene de interesse e co-cultive com os explantes vegetais para transferir o DNA."
        break;
      case 'BIOB':
        this.biob = true;
        this.src = 'gene-gun-1.png'
        this.orientacoes = "Esta máquina, conhecida como gene gun, utiliza micropartículas impulsionadas em alta velocidade para carrear DNA exógeno para dentro das células. As partículas revestidas com DNA do plasmídeo irão penetrar na parede e na membrana celular, permitindo que o DNA seja incorporado no genoma celular das folhas de feijão. Coloque as partículas revestidas na câmara e dispare a máquina."
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
