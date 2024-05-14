<template>
  <div class="hello">
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
    <img
      alt="Esquema de transformações gênicas"
      src="../assets/metodos.png"
    />
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
          nome: "Rayssa",
          nusp: null,
        },
        {
          nome: "Kawan",
          nusp: null,
        },
        {
          nome: "Eduardo",
          nusp: null,
        },
        {
          nome: "Fabricio",
          nusp: null,
        },
      ],
      resumo:
        "Inserir resumo aqui. Texto de exemplo a seguir. Atividade: Os alunos (em grupos) produzirão material de divulgação (textos, animações, gráficos, figuras, vídeos, etc) sobre os temas abordados nas aulas. O material produzido será divulgado na página do laboratório de Genética Molecular de Plantas, sites/eventos de extensão do IB (Botânica no Inverno, Botânica no Cotidiano, Semana Temática, Bio na Rua) e em redes sociais.",
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
img {
  width: 22rem;
  max-width: 95vw;
}

.hello {
  max-width: 95vw;
  margin: 0.5vw;
}
</style>
