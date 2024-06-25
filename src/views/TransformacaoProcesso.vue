<template>
  <div>
    <JanelaQuestao :titulo="`Transformação por ${selecaoVia.nome}`" :orientacoes="orientacoes" :exibirAjuda="true">
      <template #ferramentas>
        <button @click="adicionaPetri()">Petri</button>
      </template>
      <template #ajuda>
        <ImagemRef :src="'gene-gun-legenda.jpeg'" :referencia="''" v-if="biob"/>
      </template>
      <template #principal>
        <div v-if="biob">
          <ImagemRef :src="src" :key="src"/>
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
      src: ''
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
      this.src = 'gene-gun-2.jpeg'
    },
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

<style lang="scss" scoped></style>
