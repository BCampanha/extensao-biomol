<template>
  <div>
    <h5>Bem Vindo</h5>
    <RouterLink to="/1" class="botao-comecar">Começar</RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'BemVindo'
}
</script>

<style lang="scss" scoped>
.botao-comecar {
}
</style>