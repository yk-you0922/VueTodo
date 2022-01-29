<template>
  <div class="header">
    <h1 class="title">{{ props.title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent ({
  name: 'Header',
  props: {
    title: String
  },
  setup(props) {
    return {
      props
    }
  }
})
</script>

<!-- "scoped"と付けることでこのコンポーネント内のみ有効なCSSと宣言している -->
<style scoped>
  .header {
    background-color: #008080;
    width: 100%;
    height: 60px;
    padding: 10px;
  }

  .title {
    font-weight: bold;
    font-size: 48px;
    margin: 5px 10px;
    color: #bbb;
  }
</style>
