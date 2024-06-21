<template>
  <div>
    <JanelaQuestao titulo="Escolha do método de transformação" orientacoes="Primeiro, é preciso decidir qual será a técnica utilizada para transferir o gene de interesse para o feijão. A transformação pode ser realizada via: biobalística, em que partículas microscópicas de ouro ou tungstênio são cobertas com DNA e bombardeadas para o tecido da planta através da aceleração por hélio; ou Agrobacterium tumefaciens, que consiste no co-cultivo do tecido da planta com uma bactéria capaz de transferir parte do DNA para a célula vegetal.">
      <template #principal>
        <img src="../assets/metodos-2.jpg" alt="Esquema de transformação gênica por Agrobacterium e por biobalística" class="mx-auto rounded-lg border-2 w-[50rem]"/>
      </template>
      <template #ferramentas>
        <br>
        <p class="mb-2">
          Selecione a <strong>técnica de transformação gênica</strong> que você
          gostaria de simular.
        </p>
        <div v-for="opcao in opcoes" :key="opcao.id">
          <input type="radio" :id="opcao.id" :value="opcao" v-model="selecionado" @change="foiSelecionado" class="accent-verde-escuro mt-2"/>
          <label :for="opcao.id" :class="{'italic' : opcao.id==='AGRO'}" class="mx-1">{{ opcao.nome }}</label>
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
      this.$parent.$emit("viaSelecionada", this.selecionado);
    },
  },
};
</script>