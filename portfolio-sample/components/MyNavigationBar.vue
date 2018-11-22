<template>
  <header>
    <nav class="nav-container">
      <h1>My Portfolio site</h1>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/repos">Repos</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class MyNavigationBar extends Vue {}
</script>

<style scoped>
header {
  border-bottom: solid 1px #ddd;
  padding-top: 20px;
  padding-bottom: 20px;
}

.nav-container {
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

li:not(:last-child) {
  margin-right: 20px;
}
</style>
