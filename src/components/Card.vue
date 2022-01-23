<template>
  <div class="card-wrapper">
    <!-- v-forで繰り返し -->
    <div v-for="todo in todos" :key="todo.title">
      <Item />
    </div>
  </div>
</template>

<script lang="ts">
import { 
  defineComponent, 
  // reactive
} from 'vue';
// import Item from './Item.vue';
// import { Todo } from '../types/Todo';

export default defineComponent ({
  // components: {
  //   Item,
  // },
  // setup() {
  //   const todos: Todo[] = reactive({
  //     title: '',
  //   })
  //   return {
  //     todos,
  //   }
  // }
}) // export default defineComponent
</script>

<!-- "scoped"と付けることでこのコンポーネント内のみ有効なCSSと宣言している -->
<style scoped>
  .card-wrapper {
    width: 80%;
    height: 80vh;
    border-radius: 8px;
    background-color: #eee;
    padding: 15px;
  } 
</style>


