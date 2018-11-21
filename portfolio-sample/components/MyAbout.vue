<template>
  <div class="about-container">
    <h1 class="title">About</h1>

    <div class="text">
      <p class="name">yinm</p>
      <p class="description">I'm a Web Application Engineer.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class MyAbout extends Vue {}
</script>

<style scoped>
.title {
  font-size: 2rem;
}

.text {
  margin-top: 40px;
}

.text p {
  margin-top: 10px;
}

.name {
  font-weight: bold;
}
</style>
