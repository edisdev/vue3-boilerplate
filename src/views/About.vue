<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>{{ example }}</span>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
// @ is an alias to /src
export default {
  name: 'Home',
  setup () {
    const store = useStore()
    return {
      example: computed(() => store.getters['example/example'])
    }
  }
}
</script>
