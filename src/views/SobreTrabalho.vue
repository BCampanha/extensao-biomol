<template>
  <div class="flex flex-col justify-center w-4/12 mx-auto">
    <h1 class="text-2xl font-extrabold mb-5 text-verde-escuro">Trabalho de Extensão</h1>
    <p>
      Projeto disponível no repositório
      <a href="https://github.com/BCampanha/extensao-biomol" target="_blank" rel="noopener" class="text-laranja hover:text-verde-principal">GitHub</a>.
    </p>
    <h3 class="mt-5 text-lg font-bold text-escuro">Integrantes do grupo</h3>
    <ul class="list-disc list-inside marker:text-verde-escuro">
      <li v-for="integrante in integrantes" :key="integrante.nusp" class="mt-2">
        {{ integrante.nome }} - {{ integrante.nusp }}
      </li>
    </ul>
    <h3 class="mt-5 text-lg font-bold text-escuro">Sobre o projeto</h3>
    <p class="resumo">{{ resumo }}</p>
    <br>
    <br>
    <h4 class="mt-5 text-lg font-bold text-escuro">Referências</h4>
    <p v-for="referencia in referencias" class="mb-4" :key="referencia.url">
      {{ referencia.author }} ({{
        referencia.year
      }}). "{{ referencia.title }}". Em: <em>{{ referencia.publisher }}</em>. URL: <a href="referencia.url">{{ referencia.url }}</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: "SobreTrabalho",
  data() {
    return {
      integrantes: [
        {
          nome: "Beatriz Campanha Silva",
          nusp: 12676657,
        },
        {
          nome: "Eduardo Araujo Silva",
          nusp: 11818058,
        },
        {
          nome: "Fabrício Ferreira de Oliveira",
          nusp: 12527768,
        },
        {
          nome: "Kawan Santana",
          nusp: 11848538,
        },
        {
          nome: "Rayssa Oliveira Santos",
          nusp: 12558450,
        },
        {
          nome: "Rodrigo Mitsui Maluhy",
          nusp: 12527730,
        },
      ],
      referencias: [
        {
          author: "BRASILEIRO, A. C. M.; CARNEIRO, V. T. de C. (ed.)",
          title: "Manual de transformação genética de plantas",
          publisher: "Embrapa",
          address: "Brasília, DF",
          year: 2015,
          url: "https://ainfo.cnptia.embrapa.br/digital/bitstream/doc/1024323/1/MANUAL-TRANSF-GENETICA-PLANTAS-ed02-2015.pdf",
        },
        {
          author: "ANDRADE, Solange Rocha Monteiro de",
          title: "Transformação de plantas",
          publisher: "Embrapa Cerrados",
          address: "Planaltina, DF",
          year: 2003,
          url: "http://www.infoteca.cnptia.embrapa.br/infoteca/handle/doc/562707",
        },
      ],
      resumo:
        "Esse projeto de extensão visa estudar os passos que envolvem a transformação genética de plantas via Agrobacterium e Biobalística. Esses processos têm como aplicação determinar a localização de atuação de uma proteína, entender sua função específica, ou induzir um fenótipo desejado na planta.",
    };
  },
};
</script>