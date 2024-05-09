<template>
  <div>
    <JanelaQuestao
    :questao="1"
    :questaoAtual="questaoAtual"
    >
      <template #ferramentas>
        <p>Exemplo de seletor: {{ selecionado }}</p>
        <div>
          <input type="radio" id="opcao1" value="Via bombalística" v-model="selecionado" />
          <label for="opcao1">Via bombalística</label>
        </div>
  
        <div>
          <input type="radio" id="opcao2" value="Agrobactéria" v-model="selecionado" />
          <label for="opcao2">Agrobactéria</label>
        </div>
      </template>
    </JanelaQuestao>

    <JanelaQuestao
    :questao="2"
    :questaoAtual="questaoAtual"
    >
      <template #ferramentas>
        <p>Outro exemplo de seletor.</p>
      </template>
    </JanelaQuestao>

    <div class="botao-prox">
      <button :disabled="questaoAtual===1" @click="anterior()">
        Anterior
      </button>
      <button :disabled="questaoAtual>=2" @click="proxima()">
        Próxima
      </button>
    </div>
  </div>
</template>

<script>
import JanelaQuestao from '../components/JanelaQuestao.vue'

export default {
  name: 'QuestoesSimulador',
  data() {
    return {
      questaoAtual: 1,
      selecionado: ''
    }
  },
  components: {
    JanelaQuestao
  },
  methods: {
    anterior() {
      this.questaoAtual -= 1
    },
    proxima() {
      this.questaoAtual += 1
    }
  }
}
</script>

<style lang="scss" scoped>

</style>