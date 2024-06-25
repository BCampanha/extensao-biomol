<template>
  <div>
    <JanelaQuestao :titulo="`Transformação por ${selecaoVia.nome}`" :orientacoes="orientacoes" :exibirAjuda="true">
      <template #ferramentas>
        <button @click="foiConcluido()">Ação</button>
      </template>
      <template #ajuda>
        <ImagemRef :src="'gene-gun-legenda.jpeg'" :referencia="''"/>
      </template>
      <template #principal>
        <img src="../assets/gene-gun.jpeg" v-if="biob" class="mx-auto rounded-lg border-2 w-[50rem]"/>
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
      agro: false
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
        this.agro = true;
        this.orientacoes = "Prepare a Agrobacterium tumefaciens com o vetor contendo o gene de interesse e co-cultive com os explantes vegetais para transferir o DNA.Espera-se que a bactéria infecte as células através do corte nas folhas e transfira o DNA com o gene de interesse para o núcleo."
        break;
      case 'BIOB':
        this.biob = true;
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
