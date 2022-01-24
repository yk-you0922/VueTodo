<template>
  <div id="todoForm" class="form-btn-wrapper">
    <input 
      id="todo" 
      class="todo-form" 
      type="search" 
      placeholder="Please Write Todo"
      v-model="props.todoTextValue"
      @input="$emit('update:todoTextValue', $event.target.value)"
    />
    <button 
      class="submit-btn" 
      v-on:click="onSubmit()"
    >
      Add Todo
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'Form',
  props: {
    todoTextValue: {
      type: String
    }
  },
  setup(props, { emit }) {

    const onSubmit = () => {
      // emit()の中身をキーに、親コンポーネントとイベントを繋ぐ
      emit('onClickAddTodo', props);
    }

    return {
      props,
      onSubmit,
    }
  },
}) // export default defineComponent
</script>

<!-- "scoped"と付けることでこのコンポーネント内のみ有効なCSSと宣言している -->
<style scoped>
  .form-btn-wrapper {
    vertical-align: middle;
    position: relative;
    width: 80%;
    margin: 0 auto;
  }

  .todo-form {
    margin-right: 30px;
    height: 70px;
    border-radius: 8px;
    border: none;
    outline: 0;
    font-size: 50px;
    font-weight: bold;
    background-color: #555;
    color: #777;
  }

  .todo-form::placeholder {
    font-weight: bold;
    font-size: 30px;
    align-content: center;
  }

  input:focus {
    outline: 3px #777 solid;
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
