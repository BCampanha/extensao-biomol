<template>
  <div>
    <JanelaQuestao>
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
  </div>
</template>

<script>
import JanelaQuestao from '../components/JanelaQuestao.vue'

export default {
  name: 'QuestaoUm',
  components: {
    JanelaQuestao
  },
  data() {
    return {
      selecionado: ''
    }
  }
}
</script>

<style>

</style>
