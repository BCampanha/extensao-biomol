<template>
  <div>
    <JanelaQuestao titulo="Escolha da via" orientacoes="Primeiro, é preciso decidir qual será a técnica utilizada para transferir o gene de interesse para o feijão. A transformação pode ser realizada via: biobalística, em que partículas de ouro ou tungstênio cobertas com DNA são bombardeadas para o tecido da planta através da aceleração por hélio; ou Agrobacterium tumefaciens, que consiste no co-cultivo do tecido da planta com uma bactéria capaz de transferir parte do DNA para a célula vegetal.">
      <template #principal>
        <!--<img
          src="../assets/metodos-2.jpg"
          alt="Esquema de transformação gênica por Agrobacterium e por biobalística"
        />-->
      </template>
      <template #ferramentas>
        <p>
          Selecione a <strong>técnica de transformação gênica</strong> que você
          gostaria de simular.
        </p>
        <div v-for="opcao in opcoes" :key="opcao.id">
          <input
            type="radio"
            :id="opcao.id"
            :value="opcao"
            v-model="selecionado"
            @change="foiSelecionado"
          />
          <label :for="opcao.id" :class="{'italico' : opcao.id==='AGRO'}">{{ opcao.nome }}</label>
        </div>
      </template>
    </JanelaQuestao>
  </div>
</template>

<script>

export default {
  name: "EscolhaVia",
  emits: ["viaSelecionada"],
  data() {
    return {
      selecionado: {},
      opcoes: [
        {
          id: "BIOB",
          nome: "Biobalística",
        },
        {
          id: "AGRO",
          nome: "Agrobacterium tumefaciens",
        },
      ],
    };
  },
  methods: {
    foiSelecionado() {
      this.$emit("viaSelecionada", this.selecionado);
    },
  },
};
</script>

<style scoped>
/*
img {
  max-width: 100%;
}

.italico {
  font-style: italic;
}*/
</style>
