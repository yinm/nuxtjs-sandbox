<template>
  <div class="container">
    <h2>GitHub Repositories</h2>
    <div
      v-if="repos.isReady"
      class="repo-container"
    >
      <my-repository
        v-for="repo in repos.data"
        :key="repo.id"
        :repo="repo"
        class="repo"
      />
    </div>
    <p
      v-else
    >
      Now loading....
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { State, Action } from 'vuex-class'
import { ReposState } from '~/store/repos'
import MyRepository from '~/components/MyRepository.vue'

@Component({
  components: {
    MyRepository
  }
})
export default class extends Vue {
  @State('repos')
  repos!: ReposState

  @Action('fetchData', { namespace: 'repos' })
  fetchData: any

  async mounted() {
    this.fetchData()
  }
}
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

.repo-container {
  display: flex;
  flex-wrap: wrap;
}

.repo {
  flex: 1 0 480px;
}
</style>
