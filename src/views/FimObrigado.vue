<template>
  <JanelaQuestao
    titulo="Parabéns!"
    orientacoes="Você conseguiu introduzir o gene de resistência e restaurar a plantação."
    :exibirFerramentas="false" class="mb-10">
    <template #principal>
      <ImagemRef :src="'plantacao.png'" />
    </template>
  </JanelaQuestao>
</template>

<script>

export default {
name: 'FimObrigado',
}
</script>