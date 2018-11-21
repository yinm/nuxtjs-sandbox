<template>
  <a
    :href="repo.html_url"
    class="card"
  >
    <div class="text">
      <p class="name">{{ repo.name }}</p>
      <p>{{ repo.description }}</p>
    </div>

    <div class="icons">
      <div v-if="repo.language">
        <span class="language">{{ repo.language }}</span>
      </div>
      <div class="star">
        <span>star: {{ repo.stargazers_count }}</span>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class MyRepository extends Vue {
  @Prop()
  repo: any
}
</script>

<style scoped>
.card {
  margin: 10px;
  border: solid 1px #ddd;
  padding: 20px;
}

a {
  text-decoration: none;
  color: #333;
}

.name {
  font-size: 1.3rem;
}

.language {
  display: inline-block;
  padding: 5px;
  background-color: #008bff;
  color: #fff;
}
</style>
