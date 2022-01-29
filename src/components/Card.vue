<template>
  <div id="mainCard" class="card-wrapper">
    <!-- v-forで繰り返し -->
    <div v-for="todo in props.todos" :key="todo.id">
      <Item
        v-model:todoId="todo.id"
        v-model:todoText="todo.text"
        @onClickRemoveTodo="handleClick"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { 
  defineComponent,
  reactive, 
  PropType
} from 'vue';
import Item from './Item.vue';
import { Todo } from '../types/Todo';

interface State {
  todos: Array<Todo>;
}

export default defineComponent ({
  components: {
    Item,
  },
  props: {
    todos: {
      type: Object as PropType<State>,
    },
  },
  setup(props, context) {  
    
    const state = reactive({
      todos: [],
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
    height: 650px;
    border-radius: 8px;
    background-color: #555;
    padding: 15px;
    margin-bottom: 30px;
  } 
</style>


