<template>
  <component :is='`Icon${name}`' :options='$attrs'/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    /**
     * Which Icon ? Icon Name
    */
    name: {
      type: String,
      required: true
    }
  }
})
</script>
