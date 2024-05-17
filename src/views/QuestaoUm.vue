<template>
  <div>
    <JanelaQuestao>
      <template #orientacoes>
        Selecione a <strong>via de transformação gênica</strong> que você
        gostaria de simular.
      </template>
      <template #principal>
        <img
          src="../assets/metodos-2.jpg"
          alt="Esquema de transformação gênica por Agrobacterium e por biobalística"
        />
        <Transition name="slide-fade">
          <p v-if="show">
            {{
              opcoes.filter(function (e) {
                return e.id === selecionado;
              })[0]?.nome || ""
            }}
          </p>
        </Transition>
      </template>
      <template #ferramentas>
        <div v-for="opcao in opcoes" :key="opcao.id">
          <input
            type="radio"
            :id="opcao.id"
            :value="opcao.id"
            v-model="selecionado"
            @click="foiSelecionado"
          />
          <label :for="opcao.id">{{ opcao.nome }}</label>
        </div>
      </template>
    </JanelaQuestao>
  </div>
</template>

<script>
import JanelaQuestao from "../components/JanelaQuestao.vue";

export default {
  name: "QuestaoUm",
  emits: ["foiSelecionado"],
  components: {
    JanelaQuestao,
  },
  data() {
    return {
      selecionado: "",
      show: true,
      opcoes: [
        {
          id: 1,
          nome: "Via biobalística",
        },
        {
          id: 2,
          nome: "Agrobacterium",
        },
      ],
    };
  },
  methods: {
    async foiSelecionado() {
      this.$emit("foiSelecionado", this.selecionado);
      this.show = false;
      await setTimeout(500);
      this.show = true;
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px); /* ou translateY */
  opacity: 0;
}

img {
  max-width: 100%;
}
</style>
