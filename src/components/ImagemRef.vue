<<template>
  <div>
    <img v-bind:src="`../assets/${src}`" class="mx-auto rounded-lg border-2 w-[50rem]" :legenda="legenda"/>
    <p>{{ referencia }}</p>
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
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>