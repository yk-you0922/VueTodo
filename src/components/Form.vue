<template>
  <div id="todoForm" class="form-btn-wrapper">
    <input 
      id="todo" 
      class="todo-form" 
      type="search" 
      placeholder="Please Write Todo"
      v-model="state.todoTextValue"
    />
    <button 
      class="submit-btn" 
      @click="onSubmit(state.todoTextValue)"
    >
      Add Todo
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive} from 'vue';
import { ErrorMessage, MessageManager } from '../constants/ErrorMessage';
import { Todo } from '../types/Todo';

interface State {
  todoTextValue: String;
  errorMessages: Array<String>
}

export default defineComponent ({
  name: 'Form',
  props: {
    todos: {
      type: Object as PropType<Array<Todo>>,
    }
  },
  setup(props, { emit }) {
    const state = reactive<State>({
      todoTextValue: '',
      errorMessages: [],
    })

    const onSubmit = (value: string) => {
      // stateに値を格納
      state.todoTextValue = value;
      // エラーメッセージ初期化
      state.errorMessages = [];
      // 未入力チェック
      if (!value) {
        state.errorMessages.push(MessageManager(ErrorMessage.NO_INPUT, "Todo"));
        emit('onClickError', state.errorMessages[0]);
        return;
      }
      // 入力値チェック
      if (value.length > 20) {
        state.errorMessages.push(MessageManager(ErrorMessage.OVER_LENGTH, "Todo"));
        emit('onClickError', state.errorMessages[0]);
        return;
      }
      // Todoの数チェック(11個目はエラー)
      if (props.todos && props.todos.length === 10) {
        state.errorMessages.push(MessageManager(ErrorMessage.OVER_TODO_LENGTH, "Todo"));
        emit('onClickError', state.errorMessages[0]);
        return;
      }
      // emit()の中身をキーに、親コンポーネントとイベントを繋ぐ
      emit('onClickAddTodo', state);
      state.todoTextValue = '';
    }

    return {
      state,
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
