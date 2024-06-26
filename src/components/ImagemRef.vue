<<template>
  <div>
    <img v-bind:src="`../assets/${src}`" class="mx-auto rounded-lg border-2 w-[50rem]" :alt="legenda"/>
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
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>