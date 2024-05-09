<template>
  <div>
    <JanelaQuestao
      v-if="questao===1"
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
      v-if="questao===2"
    >
      <template #ferramentas>
        <p>Outro exemplo de seletor.</p>
      </template>
    </JanelaQuestao>

    <div class="botao-prox">
      <button :disabled="questao===1" @click="anterior()">
        Anterior
      </button>
      <button :disabled="questao>=2" @click="proxima()">
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
      questao: 1,
      selecionado: ''
    }
  },
  components: {
    JanelaQuestao
  },
  methods: {
    anterior() {
      this.questao -= 1
    },
    proxima() {
      this.questao += 1
    }
  }
}
</script>

<style>
.botao-prox {
  text-align: end;
  padding-right: 0.2rem;
}
</style>
