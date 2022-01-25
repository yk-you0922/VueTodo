<template>
  <div id="mainCard" class="card-wrapper">
    <!-- v-forで繰り返し -->
    <div v-for="todo in props.todos" :key="todo.id">

      <!-- Item.vue -->
      <div class="item-container">
        <div class="item-bar">
          <!-- pタグの中身はpropsとして付与？ -->
          <p class="item">{{ todo.text }}</p>
          <button 
            v-on:click="handleClick(todo.id)" 
            class="delete-btn"
          >
            ✕
          </button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts">
import { 
  defineComponent, reactive, 
} from 'vue';
// import Item from './Item.vue';
import { Todo } from '../types/Todo';

export default defineComponent ({
  components: {
    // Item,
  },
  props: {
    todos: [],
  },
  setup(props, context) {  
    
    const state = reactive({
      todos: Array<Todo>(),
      todoId: 0
    })

    const handleClick = (todoId: number) => {
      context.emit('onClickRemoveTodo', todoId);
    }

    return {
      props,
      state,
      handleClick
    }
  }
}) // export default defineComponent
</script>

<!-- "scoped"と付けることでこのコンポーネント内のみ有効なCSSと宣言している -->
<style scoped>
  /* Card.vue */
  .card-wrapper {
    width: 80%;
    height: 80vh;
    border-radius: 8px;
    background-color: #555;
    padding: 15px;
  } 

  /* Item.vue */
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


