<!-- アプリ全体のベース -->
<template>
  <div id="app-wrapper">
    <router-view />
  </div><!-- #app-wrapper -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'App',
})
</script>

<style scoped>
  #app-wrapper {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
</style>
