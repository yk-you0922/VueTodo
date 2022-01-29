<template>
  <div id="mainCard" class="card-wrapper">
    <!-- 呼び出し元で間に挟んだコンポーネントがslotタグとして表示される -->
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { 
  defineComponent,
} from 'vue';

export default defineComponent ({
  name: 'Card',
  setup() {  
    return {
      /** 見た目のみ */
    }
  }
}) // export default defineComponent
</script>

<!-- "scoped"と付けることでこのコンポーネント内のみ有効なCSSと宣言している -->
<style scoped>
  /* Card.vue */
  .card-wrapper {
    width: 80%;
    height: 650px;
    border-radius: 8px;
    background-color: #555;
    padding: 15px;
    margin-bottom: 30px;
  } 
</style>


