<template>
  <div>
    Name:
    <input
      v-model="name"
      type="text">
    <hello-component
      :name="name"
      :initial-enthusiasm="5" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import HelloComponent from '~/components/Hello'

@Component({
  components: {
    HelloComponent
  }
})

export default class extends Vue {
  name: string = 'World'
}
</script>
