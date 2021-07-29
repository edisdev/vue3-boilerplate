<template>
  <header id="header">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </header>
  <main id="main">
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@import "./assets/stylesheet/app";
</style>
