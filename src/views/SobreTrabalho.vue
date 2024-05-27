<template>
  <div class="sobre">
    <h1>Trabalho de Extensão</h1>
    <p>
      Projeto disponível no repositório
      <a
        href="https://github.com/BCampanha/extensao-biomol"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >.
    </p>
    <h3>Integrantes do grupo</h3>
    <ul>
      <li v-for="integrante in integrantes" :key="integrante.nusp">
        {{ integrante.nome }} - {{ integrante.nusp }}
      </li>
    </ul>
    <h3>Sobre o projeto</h3>
    <p class="resumo">{{ resumo }}</p>
    <h4>Referências</h4>
    <p
      v-for="referencia in referencias"
      class="referencias"
      :key="referencia.url"
    >
      {{ referencia.author.split(" ").pop().toLocaleUpperCase() }},
      {{ referencia.author.split(" ").slice(0, -1).join(" ") }} ({{
        referencia.year
      }}). "{{ referencia.title }}". Em: <em>{{ referencia.publisher }}</em
      >. URL: <a href="referencia.url">{{ referencia.url }}</a
      >.
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
          nome: "Rayssa Oliveira Santos",
          nusp: 12558450,
        },
        {
          nome: "Kawan Santana",
          nusp: 11848538,
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
          nome: "Rodrigo Mitsui Maluhy",
          nusp: 12527730,
        },
      ],
      referencias: [
        {
          author: "Solange Rocha Monteiro de Andrade",
          title: "Transformação de plantas",
          publisher: "Embrapa Cerrados",
          address: "Planaltina, DF",
          year: 2003,
          url: "http://www.infoteca.cnptia.embrapa.br/infoteca/handle/doc/562707",
        },
      ],
      resumo:
        "Esse projeto de extensão visa estudar os passos que envolvem a transformação genética de plantas via Agrobacterium. Os objetivos desse processo incluem determinar a localização de atuação de uma proteína, entender sua função específica, ou induzir um fenótipo desejado na planta.",
    };
  },
};
</script>

<style scoped>
.resumo {
  width: 22rem;
  max-width: 95vw;
  text-wrap: wrap;
  text-align: justify;
}

.referencias {
  width: 22rem;
  max-width: 95vw;
  text-wrap: wrap;
  text-align: justify;
  word-break: break-all;
}

img {
  width: 22rem;
  max-width: 95vw;
}

.sobre {
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 95vw;
  margin: 0.5vw;
}

ul {
  margin: 0;
}
</style>
