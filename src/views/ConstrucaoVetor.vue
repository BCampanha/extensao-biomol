<template>
  <div>
    <JanelaQuestao
      :titulo="`Construção do vetor de expressão gênica - ${selecaoVia.nome}`"
      :orientacoes="orientacoes"
      :exibirAjuda="true"
      :exibirModal="exibirModal"
      @toggle-modal="toggleModal"
    >
      <template #ajuda>
        <div id="modal-ajuda" class="fixed left-0 top-0 bg-black bg-opacity-50 h-screen w-screen z-10 flex justify-center items-center" @click="toggleModal">
          <div class="absolute z-20 rounded shadow-md bg-gray-200 border-4 w-[35rem] flex flex-col justify-center" @click.stop="">
            <div class="flex justify-between m-2 items-center z-40">
              <p class="text-escuro font-bold">Construção de Vetor para Biolística</p>
              <button @click.stop="toggleModal"><i class="fa-regular fa-circle-xmark text-lg text-gray-400 hover:text-red-500 mr-1"></i></button>
            </div>
            <img src="../assets/vetor-biob.png" alt="Vetor para biobalística" v-if="selecaoVia.id==='BIOB'"/>
            <img src="../assets/vetor-agro.png" alt="Vetor para agrobactéria" v-if="selecaoVia.id==='AGRO'"/>
            <p>Esse é o plasmídeo que desejamos construir para o método de {{ selecaoVia.nome }}</p>
            <p>Basta clicar nos botões em ordem, de cima para baixo!</p>
          </div>
        </div>
      </template>

      <template #principal>
        <img src="../assets/plasmideo.jpg" class="mx-auto rounded-lg border-2 w-[50rem]" alt='Esquema da estrutura de uma bactéria, com seu DNA cromossômico e DNA circular, chamado de plasmídeo'/>
        <p>Complete o vetor de transformação do plasmídeo Ti</p>

          <div class="grid grid-cols-8 mb-3">
            <div class="col-span-3"></div>
            <div v-for="erro in erros" class="col-span-5 flex justify-center text-orange-700 border-l-4 border-orange-500 bg-orange-100 p-2  w-[35vw] m-auto" role="alert">
              {{ erro }}
            </div>
          </div>
        <div class="grid grid-cols-8">
          <div class="flex flex-col items-center justify-center col-span-3 py-5">
            <button
              v-for="opcao in opcoes"
              :key="opcao.nome" 
              :style="{backgroundColor: opcao.cor}"
              @click="selecionado(opcao)" class="p-2 rounded mr-2 text-white text-xl my-4 w-96">
              {{ opcao.nome }} <em class="text-muted" v-if="opcao.descricao"> - {{  opcao.descricao }}</em>
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
      erros: [],
      gabarito: [],
      blocos: [],
      opcoes: [],
      orientacoes: '',
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
          nome: "Origem de replicação",
          nomebloco: "Ori Agro",
          cor: "#6e2a6c",
          ordem: 1,
        },
        {
          nome: "Região de virulência",
          nomebloco: "VIR",
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
          nome: "BTTX (gene de interesse)",
          descricao: "Gene que dá resistência à praga",
          nomebloco: "BTTX",
          cor: "#da9fda",
          ordem: 4,
        },
        {
          nome: "Marcador de seleção",
          descricao: "Usado para diferenciar as plantas transformadas das plantas não transformadas",
          nomebloco: "SEL",
          cor: "#1a235e",
          ordem: 5,
        },
        {
          nome: "Right Border",
          nomebloco: "RB",
          cor: "#d6783e",
          ordem: 6,
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
          nome: "BTTX (gene de interesse)",
          descricao: "Gene que dá resistência à praga",
          nomebloco: "BTTX",
          cor: "#da9fda",
          ordem: 2,
        },
        {
          nome: "Marcador de seleção",
          descricao: "Usado para diferenciar as plantas transformadas das plantas não transformadas",
          nomebloco: "SEL",
          cor: "#d6783e",
          ordem: 3,
        },
        {
          nome: "Região de virulência",
          nomebloco: "VIR",
          cor: "#3d3d3d",
          ordem: 4,
        },
      ],
    };
  },
  mounted() {
    switch (this.selecaoVia.id) {
      case 'BIOB':
        this.opcoes = this.opcoesBiob
        this.gabarito = [1,2,3,4]
        this.orientacoes = 'O plasmídeo é uma pequena molécula de DNA circular, separada do DNA cromossômico, encontrada em bactérias. Ele servirá como um veículo para carregar seu gene para as células-alvo.'
        break;
      case 'AGRO':
        this.opcoes = this.opcoesAgro
        this.gabarito = [1,2,3,4,5,6]
        this.orientacoes = 'Agrobacterium tumefasciens é um patógeno de plantas causador da doença galha-da-coroa. Durante a infecção ela introduz uma parte de seu DNA dentro do núcleo da célula, o T-DNA, forçando a célula a produzir um ambiente adequado para a bactéria. Através de técnicas de engenharia genética, podemos desarmar esse T-DNA e manipulá-lo para utilizar no processo de transformação. Já o plasmídeo é uma pequena molécula de DNA circular, separada do DNA cromossômico, encontrada em bactérias. Ele servirá como um veículo para carregar seu gene para as células-alvo. O plasmidio da Agrobacteria exige então o T-DNA, cercado por bordas (Left Border e Right Border) e genes contido na região de virulência que irão ativar a sua proliferação, entrada nas células e transferência do T-DNA.'
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
        this.erros = ['Limite de elementos excedido.']
      }
    },
    undo() {
      this.blocos.pop();
      this.erro = '';
    },
    reset() {
      this.erros = '';
      this.blocos = [];
      this.erro = '';
    },
    foiConcluido() {
      const ordens = this.blocos.map(el => el.ordem);
      let correto = true
      this.erros = []
      for (let i = 1; i <= 8; i++) {
          if (ordens.indexOf(i) !== this.gabarito.indexOf(i)) {
              this.erros.push("Posicionamento incorreto na posição " + i)
              correto = false
          }
      }
      if (correto) {
        this.erros.push("Certo!")
      }
    },
  },
};
</script>

<style>
@keyframes showModal {
  from {opacity: 0;}
  to {opacity: 1;}
}

#modal-ajuda{
  animation-name: showModal;
  animation-duration: 0.2s;
}
</style>