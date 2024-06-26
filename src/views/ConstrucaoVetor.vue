<template>
  <div>
    <JanelaQuestao
      :titulo="`Construção do vetor de expressão gênica - ${selecaoVia.nome}`"
      orientacoes="Considerando o método de transformação escolhido, construa um vetor de expressão que esteja adequado ao método."
      :exibirAjuda="true"
      :exibirModal="exibirModal"
      @toggle-modal="toggleModal"
    >
      <template #ajuda>
        <div class="fixed left-0 top-0 bg-black bg-opacity-50 h-screen w-screen z-10 flex justify-center items-center" @click="toggleModal">
          <div class="absolute z-20 rounded shadow-md bg-gray-200 border-4 w-[35rem] flex flex-col justify-center" @click.stop="">
            <div class="flex justify-between m-2 items-center z-40">
              <p class="text-escuro font-bold">Construção de Vetor para Biolística</p>
              <button @click.stop="toggleModal"><i class="fa-regular fa-circle-xmark text-lg text-gray-400 hover:text-red-500 mr-1"></i></button>
            </div>
            <img src="../assets/vetor-biob.png" alt="Resposta de biob" v-if="selecaoVia.id==='BIOB'"/>
            <img src="../assets/vetor-agro.png" alt="Resposta de agro" v-if="selecaoVia.id==='AGRO'"/>
          </div>
        </div>
      </template>

      <template #principal>
        <p>Complete o vetor de transformação do plasmídeo Ti</p>
	{{this.$parent.exibirModal}}

          <div class="grid grid-cols-8 mb-3">
            <div class="col-span-3"></div>
            <div v-if="erro" class="col-span-5 flex justify-center text-orange-700 border-l-4 border-orange-500 bg-orange-100 p-2  w-[35vw] m-auto" role="alert">
              {{ erro }}
            </div>
            <div v-else class="py-5"></div>
          </div>
        <div class="grid grid-cols-8">
          <div class="flex flex-col items-center justify-center col-span-3 py-5">
            <button
              v-for="opcao in opcoes"
              :key="opcao.nome" 
              :style="{backgroundColor: opcao.cor}"
              @click="selecionado(opcao)" class="p-2 rounded mr-2 text-white text-xl my-4 w-96">
              {{ opcao.nome }}
            </button>
          </div>

          <div class="col-span-5 flex justify-center items-center">
	  	<div class="bg-[url('/src/assets/vetor-vazio.png')] h-[60vh] w-[35vw] bg-cover bg-center border-2 rounded relative">
			      <div :style="{backgroundColor: bloco.cor, top: positions[index].top, left: positions[index].left}" class="-translate-x-1/2 -translate-y-1/2 text-white p-2 rounded absolute" v-for="(bloco, index) in blocos" :key="bloco.nome">
			{{ bloco.nomebloco }}
		    </div>
		</div>
          </div>
        </div>
      </template>

      <template #ferramentas>
          <div class="grid grid-cols-8">
            <div class="col-span-3 flex justify-center">
              <button @click="reset()" class="p-2 text-red-500 mx-4"><i class="fa fa-refresh"></i> Reset</button>
              <button @click="undo()" class="p-2 text-yellow-600 mx-4"><i class="fas fa-undo"></i> Desfazer</button>
              <button @click="foiConcluido()" class="p-2 text-verde-principal mx-4"><i class="fa fa-check"></i> Verificar</button>
            </div>
            <div class="col-span-5"></div>
          </div>
      </template>

    </JanelaQuestao>
  </div>
</template>

<script>

export default {
  name: "ConstrucaoVetor",
  props: {
    selecaoVia: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      exibirModal: false,
      erro: '',
      gabarito: [],
      blocos: [],
      opcoes: [],
      positions: [
	{
	  'top': '30%',
	  'left': '28%'
	},
	{
	  'top': '19%',
	  'left': '48%'
	},
	{
	  'top': '30%',
	  'left': '68%'
	},
	{
	  'top': '50%',
	  'left': '75%'
	},
	{
	  'top': '70%',
	  'left': '68%'
	},
	{
	  'top': '79%',
	  'left': '55%'
	},
	{
	  'top': '75%',
	  'left': '34%'
	},
	{
	  'top': '58%',
	  'left': '24%'
	},
      ],
      opcoesAgro: [
        {
          nome: "Origem de replicação Agrobacterium",
          nomebloco: "Ori Agro",
          cor: "#6e2a6c",
          ordem: 1,
        },
        {
          nome: "Origem de replicação E. coli",
          nomebloco: "Ori E. coli",
          cor: "#3d3d3d",
          ordem: 2,
        },
        {
          nome: "Left Border",
          nomebloco: "LB",
          cor:"#d6783e",
          ordem: 3,
        },
        {
          nome: "Promotor de transcrição",
          nomebloco: "P",
          cor: "#9bd778",
          ordem: 4,
        },
        {
          nome: "Gene de interesse",
          nomebloco: "Gene",
          cor: "#da9fda",
          ordem: 5,
        },
        {
          nome: "Terminador de transcrição",
          nomebloco: "T",
          cor: "#75747f",
          ordem: 6,
        },
        {
          nome: "Marcador de seleção",
          nomebloco: "SEL",
          cor: "#1a235e",
          ordem: 7,
        },
        {
          nome: "Right Border",
          nomebloco: "RB",
          cor: "#d6783e",
          ordem: 8,
        },
      ],
      opcoesBiob: [
        {
          nome: "Origem de replicação",
          nomebloco: "Ori",
          cor: "#3d3d3d",
          ordem: 1,
        },
        {
          nome: "Promotor de transcrição",
          nomebloco: "P",
          cor: "#693269",
          ordem: 2,
        },
        {
          nome: "Gene de interesse",
          nomebloco: "Gene",
          cor: "#da9fda",
          ordem: 3,
        },
        {
          nome: "Terminador de transcrição",
          nomebloco: "T",
          cor: "#f0cf38",
          ordem: 4,
        },
        {
          nome: "Marcador de seleção",
          nomebloco: "SEL",
          cor: "#d6783e",
          ordem: 5,
        },
      ],
    };
  },
  mounted() {
    switch (this.selecaoVia.id) {
      case 'BIOB':
        this.opcoes = this.opcoesBiob
        this.gabarito = [1,2,3,4,5]
        break;
      case 'AGRO':
        this.opcoes = this.opcoesAgro
        this.gabarito = [1,2,3,4,5,6,7,8]
        break;
      default:
        this.$router.push('/1')
        break;
    }
  },
  methods: {
    toggleModal(){
      this.exibirModal = ! this.exibirModal;
    },
    selecionado(opcao) {
      if (this.blocos.length < this.gabarito.length) {
        this.blocos.push(opcao);
      }
      else {
        this.erro = 'Número máximo de componentes alcançado!'
      }
    },
    undo() {
      this.blocos.pop();
      this.erro = '';
    },
    reset() {
      this.blocos = [];
      this.erro = '';
    },
    foiConcluido() {
      const ordens = this.blocos.map(el => el.ordem);

      for (let i = 1; i <= 8; i++) {
          if (ordens.indexOf(i) !== this.gabarito.indexOf(i)) {
              this.erro = "Erro na posição " + i
              return
          }
      }

      this.erro = "certo!"
    },
  },
};
</script>
