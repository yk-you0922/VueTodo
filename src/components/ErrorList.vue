<template>
  <div class="error" v-if="props.errorMessages.length > 0">
    <ul>
      <li v-for="errorMessage in props.errorMessages" :key="errorMessage">
        {{ errorMessage }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  props: {
    errorMessages: [],
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
  /* Error.vue */
  .error {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .error ul li {
    list-style: none;
  }
</style>
