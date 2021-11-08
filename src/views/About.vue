<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>{{ example }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
// @ is an alias to /src
export default defineComponent({
  name: 'About',
  setup () {
    const store = useStore()

    console.log(store)
    return {
      example: []
    }
  }
})
</script>
