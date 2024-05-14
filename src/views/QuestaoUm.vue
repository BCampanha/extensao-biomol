<template>
  <div>
    <JanelaQuestao>
      <template #orientacoes>
        Selecione a <strong>via de transformação gênica</strong> que você
        gostaria de simular.
      </template>
      <template #ferramentas>
        <Transition name="slide-fade">
          <p v-if="show">{{ selecionado }}</p>
        </Transition>
        <div>
          <input
            type="radio"
            id="opcao1"
            value="Via bombalística"
            v-model="selecionado"
            @click="foiSelecionado"
          />
          <label for="opcao1">Via bombalística</label>
        </div>

        <div>
          <input
            type="radio"
            id="opcao2"
            value="Agrobactéria"
            v-model="selecionado"
            @click="foiSelecionado"
          />
          <label for="opcao2">Agrobactéria</label>
        </div>
      </template>
      <template #principal> </template>
    </JanelaQuestao>
  </div>
</template>

<script>
import JanelaQuestao from "../components/JanelaQuestao.vue";

export default {
  name: "QuestaoUm",
  components: {
    JanelaQuestao,
  },
  data() {
    return {
      selecionado: "",
      show: false,
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
</style>
