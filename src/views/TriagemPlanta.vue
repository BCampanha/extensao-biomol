<template>
  <div>
    <JanelaQuestao titulo="Triagem" orientacoes="Verifique a presença do gene nas células transformadas usando análise molecular, como o teste de PCR para amplificar e detectar o gene de interesse. Avalie a expressão gênica e confirme o sucesso da transformação.">
      <template #principal>
        <img class="mx-auto rounded-lg border-2 md:w-[50rem]" src="../assets/pcr.png" />
        <p class="mb-4">Análises de amplificação por PCR por eletroforese em gel de agarose. As bandas brancas são fragmentos de DNA amplificados e corados. O DNA do plasmídeo utilizado foi adotado como controle positivo e o DNA de uma planta não transformada foi utilizado como controle negativo. 1-5 são amostras de DNA das plantas regeneradas. </p>
      </template>
      <template #ferramentas>
        <button @click="aviso='Certo!'" class="text-l bg-verde-escuro text-white p-2 rounded mr-1 mb-1">Foi bem sucedida</button>
        <button @click="aviso='Errado, a transformação foi bem sucedida'" class="text-l bg-laranja text-white p-2 rounded">Não foi bem sucedida</button>
        <p v-if="aviso" class="flex justify-center border-l-4 border-gray-500 bg-gray-100 py-2">
          {{ aviso }}
        </p>
      </template>
    </JanelaQuestao>
  </div>
</template>

<script>
export default {
  name: "TriagemPlanta",
  data() {
    return {
      aviso: ''
    }
  }
};
</script>

<style lang="scss" scoped></style>
