<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <Icon name="Happy" :width="50" :height="50"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
//
import { EXAMPLE_GETTER_TYPES } from '@/@types/state.interface'
//
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { EXAMLE_ACTION_TYPES } from '@/@types/actions.interface'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters('example', {
      list: EXAMPLE_GETTER_TYPES.exampleList
    })
  },
  methods: {
    ...mapActions('example', {
      fetchList: EXAMLE_ACTION_TYPES.fetchList
    })
  },
  async mounted () {
    await this.fetchList()
    console.log(this.list)
  }
})
</script>
