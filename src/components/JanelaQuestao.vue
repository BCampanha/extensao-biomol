<template>
  <div class="tela">
    <strong>{{ titulo }}</strong>
    <div class="janela">
      <div class="bloco orientacoes">
        <p class="texto">
          <slot name="orientacoes"
            ><em>Este é um bloco para orientações sobre a questão.</em></slot
          >
        </p>
      </div>

      <div class="bloco tela-principal">
        <slot name="principal"
          ><em>Este bloco é a tela principal da simulação.</em></slot
        >
      </div>

      <div class="bloco ferramentas">
        <slot name="ferramentas"
          ><em>Este é um bloco de ferramentas/ações.</em></slot
        >
        <div
          class="botoes"
        >
          <RouterLink :to="anterior">Voltar</RouterLink>
          <RouterLink :to="proxima">Proximo</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: "JanelaQuestao",
  props: {
    titulo: {
      type: String,
      default: "Insira um título",
    },
  },
  computed: {
    anterior() {
      if (parseInt(this.$route.name) > 1) {
        return `${parseInt(this.$route.name) - 1}`
      }
      return "/"
    },
    proxima() {
      if (parseInt(this.$route.name) >= 1) {
        return `${parseInt(this.$route.name) + 1}`
      }
      return "/1"
    }
  }
};
</script>

<style lang="scss" scoped>
.janela {
  position: relative;
  right: 0;
  bottom: 0;
  .orientacoes {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    position: absolute;
    top: 0;
    right: 10vw;
    max-height: 30vh;
  }
  .tela-principal {
    display: flex;
    width: 92vw;
    flex-direction: column;
    justify-content: center;
    max-width: 100vw;
    min-height: 70vh;
  }
  .ferramentas {
    position: fixed;
    max-height: 30vh;
    bottom: 0;
    border-top: 2px solid rgb(238, 238, 238);
  }
  .bloco {
    padding: 1rem;
    background-color: white;
    border-radius: 8px;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
@media screen and (max-width: 992px) {
  .tela {
    left: 1vw;
  }
  .janela {
    .bloco {
      padding: 0.5rem;
    }
  }
}

em {
  margin-bottom: 0.5rem;
}

.texto {
  margin-top: 0;
  text-align: justify;
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
}
</style>
