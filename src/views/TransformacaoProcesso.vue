<template>
  <div>
    <JanelaQuestao :titulo="`Transformação por ${selecaoVia.nome}`" :orientacoes="orientacoes" :exibirAjuda="true">
      <template #ajuda>
        <ImagemRef :src="'gene-gun-legenda.jpeg'" :referencia="''" v-if="biob"/>
      </template>
      <template #principal>
        <div v-if="biob" class="imagens">
          <Transition>
            <img src="../assets/gene-gun-1.png"/>
          </Transition>
          <Transition>
            <img src="../assets/gene-gun-2.png" v-show="petriAdicionado"/>
          </Transition>
          <Transition>
            <img src="../assets/gene-gun-3.png" v-show="maquinaLigada"/>
          </Transition>
        </div>
        </template>
        <template #ferramentas>
          <button @click="adicionaPetri()">Petri</button>
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
    ligaMaquina() {
      this.erro = ''
      if (this.petriAdicionado) {
        this.imagemInicial = false
        this.maquinaLigada = true
      }
      else {
        this.erro = 'Primeiro, coloque a placa de petri no disco da máquina'
      }
    }
  },
  mounted() {
    switch (this.selecaoVia.id) {
      case 'AGRO':
        this.agro = true;
        this.orientacoes = "Espera-se que a bactéria infecte as células através do corte nas folhas e transfira o DNA com o gene de interesse para o núcleo. Para isso, prepare a Agrobacterium tumefaciens com o vetor contendo o gene de interesse e co-cultive com os explantes vegetais para transferir o DNA."
        break;
      case 'BIOB':
        this.biob = true;
        this.src = 'gene-gun-1.png'
        this.orientacoes = "Esta máquina, conhecida como gene gun, permite que você introduza DNA em células utilizando micropartículas metálicas. As partículas carregadas com DNA irão penetrar nas células, permitindo que o DNA seja incorporado no genoma celular. Coloque as partículas revestidas na câmara e dispare a máquina."
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
