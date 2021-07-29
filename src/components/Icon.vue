<template>
  <component :is='`Icon${name}`' :options='$attrs'/>
</template>

<script>
export default {
  props: {
    /**
     * Which Icon ? Icon Name
    */
    name: {
      type: String,
      required: true
    }
  }
}
</script>
