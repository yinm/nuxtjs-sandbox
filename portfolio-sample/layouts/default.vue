<template>
  <div class="default-container">
    <my-navigation-bar class="default-header" />
    <nuxt/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import MyNavigationBar from '~/components/MyNavigationBar.vue'

@Component({
  components: {
    MyNavigationBar
  }
})
export default class extends Vue {}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.default-header {
  margin-bottom: 50px;
}
</style>
