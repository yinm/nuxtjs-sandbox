<template>
  <div class="container">
    <my-about />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import MyAbout from '~/components/MyAbout.vue'

@Component({
  components: {
    MyAbout
  }
})
export default class extends Vue {}
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
