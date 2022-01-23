<template>
  <div class="form-btn-wrapper">
    <input 
      id="todo" class="todo-form" 
      type="text" placeholder="Please Write Todo"
      v-model="state.todo"
    />
    <button 
      class="submit-btn" 
      @click="onClick"
    >
      Add Todo
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

interface State {
  todo: string;
}

export default defineComponent ({
  setup() {
    const state = reactive<State>({
      todo: ''
    })

    const onClick = () => {
      console.log(state.todo);
    }

    return {
      state,
      onClick
    }
  }
}) // export default defineComponent
</script>

<!-- "scoped"と付けることでこのコンポーネント内のみ有効なCSSと宣言している -->
<style scoped>
  .form-btn-wrapper {
    vertical-align: middle;
    position: relative;
  }

  .todo-form {
    margin-right: 30px;
    height: 70px;
    width: 700px;
    border-radius: 8px;
    border: none;
    border-bottom: 3px dotted #ccc;
    outline: 0;
    font-size: 30px;
  }

  .todo-form::placeholder {
    font-weight: bold;
    font-size: 30px;
    align-content: center;
  }

  input:focus {
    outline: 3px #f0f8ff solid;
  }

  .submit-btn {
    padding: 10px;
    width: 100px;
    height: 70px;
    background-color: #6495ed;
    color: #eee;
    font-weight: bold;
    border-radius: 8px;
    border: 0;
    outline: 0;
    overflow: visible;
    line-height: 60px;
  }

  .submit-btn:hover {
    opacity: 0.8;
    cursor: pointer;
  }
</style>
