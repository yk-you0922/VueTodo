<template>
  <div id="mainCard" class="card-wrapper">
    <!-- v-forで繰り返し -->
    <div v-for="todo in props.todos" :key="todo.id">
      <Item
        v-model:todoId="todo.id"
        v-model:todoText="todo.text"
        v-on:onClickRemoveTodo="handleClick"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { 
  defineComponent, reactive, 
} from 'vue';
import Item from './Item.vue';
import { Todo } from '../types/Todo';

export default defineComponent ({
  components: {
    Item,
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
</style>


