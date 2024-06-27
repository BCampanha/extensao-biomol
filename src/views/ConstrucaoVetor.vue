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
          <div class="absolute z-20 rounded shadow-md bg-creme border-2 border-verde-escuro md:w-[40rem] flex flex-col justify-center" @click.stop="">
            <div class="flex justify-between p-2 items-center z-40 bg-verde-escuro">
		          <p class="text-white font-bold">Esse é o plasmídeo que desejamos construir para o método de {{ selecaoVia.nome }}</p>
              <button @click.stop="toggleModal"><i class="fa-regular fa-circle-xmark text-lg text-red-500 hover:text-red-600 mr-1"></i></button>
            </div>
            <img src="../assets/vetor-biob.png" alt="Vetor para biobalística" class="rounded m-2 border" v-if="selecaoVia.id==='BIOB'"/>
            <img src="../assets/vetor-agro.png" alt="Vetor para agrobactéria" class="rounded m-2 border" v-if="selecaoVia.id==='AGRO'"/>
            <div class="p-2 text-lg text-escuro">
              <p>Basta clicar nos botões em ordem, de cima para baixo!</p>
            </div>
            </div>
        </div>
      </template>

      <template #principal>
        <img src="../assets/plasmideo.jpg" class="mx-auto rounded-lg border-2 w-[35rem] mt-5" alt='Esquema da estrutura de uma bactéria, com seu DNA cromossômico e DNA circular, chamado de plasmídeo'/>
        <small><p class="text-center mb-10">Adobe Stock</p></small>
        <span class="text-lg">Complete o vetor de transformação do plasmídeo Ti</span>


        <div class="md:grid md:grid-cols-8 flex flex-col">
          <div class="flex flex-col items-center justify-center col-span-4 my-3 md:col-span-3">
            <button
              v-for="opcao in opcoes"
              :key="opcao.nome" 
              :style="{backgroundColor: opcao.cor}"
              @click="selecionado(opcao)" class="p-2 w-full rounded text-white text-sm lg:text-xl md:my-4 my-1 md:w-72 lg:w-96">
              {{ opcao.nome }} <em class="text-muted" v-if="opcao.descricao"> <br> {{  opcao.descricao }}</em>
            </button>
          </div>

          <div class="col-span-4 md:col-span-5 flex justify-center items-center">
            <div class="bg-[url('/src/assets/vetor-vazio.png')] h-[30vh] w-[80vw] md:h-[60vh] md:w-[35vw] bg-cover bg-center border-2 rounded relative">
              <div :style="{backgroundColor: bloco.cor, top: positions[index].top, left: positions[index].left}" class="-translate-x-1/2 -translate-y-1/2 text-white text-sm p-1 md:text-base md:p-2 rounded absolute" v-for="(bloco, index) in blocos" :key="bloco.nome">
                {{ bloco.nomebloco }}
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #ferramentas>
          <div class="grid grid-cols-8 mt-4">
            <div class="md:col-span-3 col-span-12 flex justify-center items-start">
              <button @click="reset()" class="p-2 text-red-500 mx-4"><i class="fa fa-refresh"></i> Reset</button>
              <button @click="undo()" class="p-2 text-yellow-600 mx-4"><i class="fas fa-undo"></i> Desfazer</button>
              <button @click="foiConcluido()" class="p-2 text-verde-principal mx-4"><i class="fa fa-check"></i> Verificar</button>
            </div>
            <div class="md:col-span-5 col-span-12">
              <div v-for="erro in erros" class="flex justify-center text-orange-700 border-l-4 border-orange-500 bg-orange-100 py-2  md:w-[35vw] m-auto" role="alert" :class="[this.erros[0]=='Certo!' ? ['bg-green-100', 'border-green-500', 'text-green-700']: '']">
                {{ erro }}
              </div>
            </div>
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
      this.erros = [];
    },
    reset() {
      this.erros = [];
      this.blocos = [];
    },
    foiConcluido() {
      const ordens = this.blocos.map(el => el.ordem);
      let correto = true
      this.erros = []
      for (let i = 1; i <= 8; i++) {
          if (ordens.indexOf(i) !== this.gabarito.indexOf(i)) {
              this.erros.push("Posicionamento incorreto na " + i + "ª posição")
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
