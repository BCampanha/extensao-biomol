<template>
  <div>
    <img v-bind:src="`src/assets/${src}`" :alt="legenda" class="mx-auto rounded-lg border-2 w-[50rem]"/>
    <small><p class="text-center">{{ referencia }}</p></small>
  </div>
</template>

<script>
  export default {
    name: 'ImagemRef',
    props: {
      src: {
        type: String,
        required: true
      },
      referencia: {
        type: String
      },
      legenda: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>