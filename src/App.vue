<!-- アプリ全体のベース -->
<template>
  <Header  :title="state.appTitle"/>
  <div id="app-wrapper">
    <router-view />
  </div><!-- #app-wrapper -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';

export default defineComponent ({
  name: 'App',
  components: {
    Header,
  },
  setup() {
    const state = {
      appTitle: 'VueTodo'
    }

    return {
      state
    }
  }
})
</script>

<style scoped>
  #app-wrapper {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
</style>
