<template>
  <div class="item-container">
    <div class="item-bar">
      <!-- pタグの中身はpropsとして付与？ -->
      <p class="item">{{ props.todoText }}</p>
      <button 
        v-on:click="handleClick(props.todoId)" 
        class="delete-btn"
      >
        ✕
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'Item',
  props:{
    todoId: {
      type: Number
    },
    todoText: {
      type: String
    }
  },
  setup(props, context) {

    const handleClick = (todoId: number) => {
      context.emit('onClickRemoveTodo', todoId);
    }

    return {
      props,
      handleClick
    }
  }
})
</script>

<!-- "scoped"と付けることでこのコンポーネント内のみ有効なCSSと宣言している -->
<style scoped>
  .item-container {
    border-radius: 8px;
    background-color: #777;
    height: 50px;
    margin-bottom: 15px;
    box-shadow: -4px -6px 2px #444 inset;
  }

  .item-bar {
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }

  .item {
    font-size: 30px;
    margin: 0px 0px 10px 5px;
  }

  .delete-btn {
    outline: 0;
    border: 0;
    background-color: #777;
    font-size: 25px;
    height: 30px;
    font-weight: bold;
  }
  /* ボタンホバー時 */
  .delete-btn:hover {
    opacity: 0.8;
    background-color: #777;
    cursor: pointer;
  }
  /* ボタン押下時 */
  .delete-btn:active {
    font-weight: normal;
    font-size: 23px;
  }
</style>
