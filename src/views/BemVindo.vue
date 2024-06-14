<template>
  <div>
    <JanelaQuestao
      titulo="Bem Vindo!"
      orientacoes="Uma doença bacteriana tem destruído plantações de feijão no Brasil todo, ameaçando a economia do país e a segurança alimentar dos brasileiros. Após comparar a expressão gênica entre espécies resistentes e não resistentes ao patógeno, você e sua equipe do Laboratório de Melhoramento Genético de Plantas conseguiram identificar e caracterizar o gene bttx que confere resistência contra o patógeno. Agora seu objetivo é introduzir esse gene em feijões para obter linhagens resistentes, através da técnica conhecida como Transformação Genética. A partir do gene isolado, cabe a você decidir os métodos que serão utilizados para a transformação."
      :exibirFerramentas="false"
    >
    </JanelaQuestao>
    <RouterLink to="/1" class="botao-comecar">Começar</RouterLink>
  </div>
</template>

<script>

export default {
  name: 'BemVindo',
}
</script>

<style lang="scss" scoped>
.botao-comecar {
}
</style>