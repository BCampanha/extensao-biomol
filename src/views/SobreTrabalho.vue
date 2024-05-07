<template>
  <div class="hello">
    <h1>Trabalho de Extensão</h1>
    <p>
      Projeto disponível no repositório
      <a href="https://github.com/BCampanha/extensao-biomol" target="_blank" rel="noopener">GitHub</a>.
    </p>
    <h3>Integrantes do grupo</h3>
    <ul>
      <li v-for="integrante in integrantes" :key="integrante.nusp">
        {{ integrante.nome }} - {{ integrante.nusp }}
      </li>
    </ul>
    <h3>Sobre o projeto</h3>
    <p>Inserir resumo aqui</p>
  </div>
</template>

<script>
export default {
  name: 'SobreTrabalho',
  data() {
    return {
      integrantes: [
        {
        "nome": "Beatriz Campanha Silva",
        "nusp": 12676657
        },
        {
        "nome": "Rayssa",
        "nusp": null
        },
        {
        "nome": "Kawan",
        "nusp": null
        },
        {
        "nome": "Eduardo",
        "nusp": null
        },
        {
        "nome": "Fabricio",
        "nusp": null
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
