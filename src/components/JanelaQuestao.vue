<template>
  <div class="tela">
    <strong class="text-escuro text-lg">{{ titulo }}</strong>

	<slot v-if="exibirModal" name="ajuda">
		<em>Este é um bloco modal de ajuda.</em>
	</slot>

    <div class="modal flex justify-end mr-2" v-if="exibirAjuda">
      <button @click="toggleModal" class="text-blue-600"><i class="fa fa-question-circle"></i> Ajuda</button>
    </div>

    <div class="mt-3">

      <div @click="proximaParte">
        <p class="text-lg">
          {{ orientacoesTextoExibido }}
          <em v-if="parte < partesMax"> Continue... </em>
        </p>
      </div>

      <div class="mt-2">
        <slot name="principal"
          ><em>Este bloco é a tela principal da simulação.</em></slot
        >
      </div>

      <div v-if="exibirFerramentas">
        <slot name="ferramentas">
          <em>Este é um bloco de ferramentas/ações.</em>
        </slot>
        <br>
        <RouterLink :to="anterior" class="text-white bg-laranja p-2 rounded">Voltar</RouterLink>
        <RouterLink :to="proxima" class="text-white bg-laranja p-2 rounded ml-2">Próximo</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "JanelaQuestao",
  data() {
      return {
        parte: 0,
      }
    },
  props: {
    titulo: {
      type: String,
      default: "Insira um título",
    },
    orientacoes: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    exibirFerramentas: {
      type: Boolean,
      default: true
    },
    exibirAjuda: {
      type: Boolean,
      default: false
    },
    exibirModal: {
      type: Boolean,
      default: false
    }
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
    },
    orientacoesTextoExibido() {
      if (window.innerWidth < 1000) {
        return this.orientacoes.split('. ')[this.parte]
      }
      return this.orientacoes
    },
    partesMax() {
      if (window.innerWidth < 1000) {
        return this.orientacoes.split('. ').length - 1
      }
      return 0
    }
  },
  methods: {
      proximaParte() {
        if(this.parte < this.partesMax) {
          this.parte += 1
        }
      },
      toggleModal(){
        this.$emit('toggle-modal');
      }
    }
};
</script>
