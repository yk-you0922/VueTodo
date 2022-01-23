<template>
  <div class="item-container">
    <div class="item-bar">
      <!-- pタグの中身はpropsとして付与？ -->
      <p class="item">{{todo}}</p>
      <button class="delete-btn">✕</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent ({
  components: {
  },
  setup() {
    const todo = ref<String>("test");

    return {
      todo
    }
  }
})
</script>

<!-- "scoped"と付けることでこのコンポーネント内のみ有効なCSSと宣言している -->
<style scoped>
  .item-container {
    border-radius: 8px;
    background-color: #fff;
    height: 50px;
  }

  .item-bar {
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }

  .item {
    font-size: 30px;
    margin: 5px;
  }

  .delete-btn {
    outline: 0;
    border: 0;
    background-color: #fff;
    font-size: 20px;
    font-weight: bold;
    width: 45px;
  }
  /* ボタンホバー時 */
  .delete-btn:hover {
    opacity: 0.8;
    border: 1px solid #ddd;
    border-radius: 50%;
    width: 45px;
    background-color: #eee;
    cursor: pointer;
  }
  /* ボタン押下時 */
  .delete-btn:active {
    font-weight: normal;
    font-size: 15px;
  }
</style>
