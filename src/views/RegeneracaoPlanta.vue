<template>
  <div>
    <JanelaQuestao titulo="Regeneração in vitro" orientacoes="Meio de Indução de brotos em um meio com antibiótico/herbicida
        (higromicina ou kanamicina) Meio de enraizamento">
        <template #principal>
          Imagem das folhas cortadas
        </template>
        <template #ferramentas>
          <button>
            auxina (raiz)
          </button>
          <button>
            citocinina (folhas)
          </button>
        </template>
    </JanelaQuestao>
  </div>
</template>

<script>
export default {
  name: "RegeneracaoPlanta",
};
</script>

<style lang="scss" scoped></style>
