<template>
  <div>
    <JanelaQuestao :titulo="`Transformação por ${selecaoVia.nome}`" :orientacoes="orientacoes" :exibirAjuda="true">
      <template #ferramentas>
        <button @click="adicionaPetri()">Petri</button>
        <button @click="ligaMaquina()">Ligar</button>
      </template>
      <template #ajuda>
        <ImagemRef :src="'gene-gun-legenda.jpeg'" :referencia="''" v-if="biob"/>
      </template>
      <template #principal>
        <div v-if="biob" class="imagens">
          <Transition>
            <img src="../assets/gene-gun-1.png" v-show="imagemInicial"/>
          </Transition>
          <Transition>
            <img src="../assets/gene-gun-2.png" v-show="petriAdicionado"/>
          </Transition>
          <Transition>
            <img src="../assets/gene-gun-3.png" v-show="maquinaLigada"/>
          </Transition>
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
      this.imagemInicial = false
      this.petriAdicionado = true
    },
    ligaMaquina() {
      this.petriAdicionado = false
      this.maquinaLigada = true
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
  height: 50vh;
  img {
    position: fixed;
  }
}
</style>
