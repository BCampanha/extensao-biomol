<template>
  <div>
    <JanelaQuestao :titulo="`Transformação por ${selecaoVia.nome}`" :orientacoes="orientacoes">
      <template #ferramentas>
        <button @click="foiConcluido()">Ação</button>
      </template>
    </JanelaQuestao>
  </div>
</template>

<script>
export default {
  name: "TransformacaoProcesso",
  data() {
    return {
      orientacoes: ''
    }
  },
  props: {
    selecaoVia: {
      type: Object,
      required: true
    }
  },
  methods: {
    foiConcluido() {
      this.$emit("foiConcluido");
    },
  },
  mounted() {
    switch (this.selecaoVia.id) {
      case 'AGRO':
        this.orientacoes = "Prepare a Agrobacterium tumefaciens com o vetor contendo o gene de interesse e co-cultive com os explantes vegetais para transferir o DNA. Espera-se que a bactéria infecte as células através do corte nas folhas e transfira o DNA com o gene de interesse para o núcleo."
        break;
      case 'BIOB':
        this.orientacoes = "Esta máquina, também conhecida como gene gun, permite que você introduza DNA em células utilizando micropartículas metálicas. Coloque as partículas revestidas na câmara de disparo da máquina. As partículas carregadas com DNA irão penetrar nas células, permitindo que o DNA seja incorporado no genoma celular."
        break; 
      default:
        this.$router.push('/1')
        break;
    }
  }
};
</script>

<style lang="scss" scoped></style>
