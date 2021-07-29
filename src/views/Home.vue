<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Icon name="Happy" :width="50" :height="50"/>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  mounted () {
    console.log(this.$store.getters['example/example'])
  }
}
</script>
