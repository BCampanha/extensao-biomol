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
        this.orientacoes = "Cultivo de Agrobacterium Indução dos genes de transferência vir com acetoceringona. Espera-se que Agrobacterium infecte as células através da ferida e transfira o DNA com o gene de interesse para o núcleo."
        break;
      case 'BIOB':
        this.orientacoes = "Bombardeamento via gene gun"
        break;
      default:
        this.$router.push('/1')
        break;
    }
  }
};
</script>

<style lang="scss" scoped></style>
