<template>
  <JanelaQuestao
    titulo="Parabéns!"
    orientacoes="Você conseguiu introduzir o gene de resistência e restaurar a plantação."
    :exibirFerramentas="false" class="mb-10">
    <template #principal>
      <img src="../assets/plantacao.png" alt="Plantação" class="mx-auto rounded-lg border-2 w-[50rem]"/>
    </template>
  </JanelaQuestao>
</template>

<script>

export default {
name: 'FimObrigado',
}
</script>