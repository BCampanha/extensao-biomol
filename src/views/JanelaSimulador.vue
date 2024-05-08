<template>
  <div class="janela">
    <section class="bloco orientacoes">
      Este é um bloco para orientações.
    </section>
    <section class="bloco tela-principal">
      Este bloco é a tela principal.
    </section>
    <section class="bloco ferramentas">
      Este é o bloco interativo para ferramentas e opções.
    </section>
  </div>
</template>

<script>
export default {
  name: 'JanelaSimulador'
}
</script>

<style lang="scss" scoped>
.janela {
  display: flex;  
  flex-direction: row;
  width: 90vw;
  height: 80vh;
  .bloco {
    padding: 1rem;
    margin: 0.2rem;
    background-color: lightgray;
  }
  .orientacoes {
    min-width: 20%;
  }
  .tela-principal {
    min-width: 40%;
  }
  .ferramentas {
    min-width: 20%;
  }
}
@media screen and (max-width: 770px) {
  .janela {
    flex-direction: column;
    .orientacoes {
      min-height: 10%;
    }
    .tela-principal {
      min-height: 50%;
    }
    .ferramentas {
      min-height: 20%;
    }
  }
}
</style>