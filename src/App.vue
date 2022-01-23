<!-- アプリ全体のベース -->
<template>
  <div id="app-wrapper">
    <!-- Error.vue -->
    <ErrorList v-bind:errorMessages="state.errorMessages"/>

    <!-- Form.vue -->
    <div id="todoForm" class="form-btn-wrapper">
      <input 
        id="todo" 
        class="todo-form" 
        type="search" 
        placeholder="Please Write Todo"
        v-model="state.todoText"
      />
        <!-- v-model="state.todo" -->
      <button 
        class="submit-btn" 
        v-on:click="addTodo()"
      >
        Add Todo
      </button>
    </div>

    <!-- Card.vue -->
    <div id="mainCard" class="card-wrapper">
      <!-- v-forで繰り返し -->
      <div v-for="todo in state.todos" v-bind:key="todo.id">

        <!-- Item.vue -->
        <div class="item-container">
          <div class="item-bar">
            <!-- pタグの中身はpropsとして付与？ -->
            <p class="item">{{ todo.text }}</p>
            <button v-on:click="removeTodo(todo.id)" class="delete-btn">✕</button>
          </div>
        </div>
        
      </div>
    </div>

  </div><!-- #app-wrapper -->
</template>

<script lang="ts">
import { 
  defineComponent, 
  reactive,
} from 'vue';
// import Card from './components/Card.vue';
// import Form from './components/Form.vue';
import ErrorList from './components/ErrorList.vue';
import { Todo } from './types/Todo';
import { ErrorMessage } from './constants/ErrorMessage';
import { MessageManager } from './constants/ErrorMessage';

export default defineComponent ({
  components: {
    // コンポーネント化したものをここで宣言
    ErrorList,
  },
  setup() {
    // 参照するオブジェクト
    const state = reactive({
      todoText: '',
      todos: new Array<Todo>(),
      errorMessages: new Array<string>()
    })

    // Todo追加ボタン押下時の処理
    const addTodo = () => {
      // エラーの初期化
      state.errorMessages = [];
      // 未入力チェック
      if (!state.todoText) {
        state.errorMessages.push(MessageManager(ErrorMessage.NO_INPUT, "Todo"));
        // エラーの場合、入力フォームにフォーカスを当てる
        focusForm();
        return;
      }
      // 入力値チェック
      if (state.todoText.length > 20) {
        state.errorMessages.push(MessageManager(ErrorMessage.OVER_LENGTH, "Todo"));
        // エラーの場合、入力フォームにフォーカスを当てる
        focusForm();
        return;
      }
      // Todoオブジェクト作成
      const newTodo: Todo = {
        id: state.todos.length+1,
        text: state.todoText
      }
      // Todoの数チェック(17個目はエラー)
      if (state.todos.length == 16) {
        state.errorMessages.push(MessageManager(ErrorMessage.OVER_TODO_LENGTH, "Todo"));
        // エラーの場合、入力フォームにフォーカスを当てる
        focusForm();
        return;
      }
      // Todoへの追加
      state.todos = [...state.todos, newTodo];
      // 追加完了後、入力フォームを空にする + フォーカスを当てる
      focusForm();
      state.todoText = '';
    }

    // deleteボタン押下時の処理
    const removeTodo = (todoId: number) => {
      // 確認メッセージ キャンセルは処理中断
      if (!confirm("Todoを削除しますか？")) return; 

      // 確認メッセージでOKボタン押下（処理実行）
      // 引数に渡したtodoId"以外"の要素で配列を再生成
      const returnTodos: Todo[] = [...state.todos].filter((newTodos) => newTodos.id !== todoId);
      // 再生成した配列をセット
      state.todos = returnTodos;
      focusForm();
    }

    // フォームにフォーカスを当てる
    const focusForm = () => {
      const form = document.getElementById("todo");
      form?.focus();
    }

    return {
      state,
      addTodo,
      removeTodo,
    }
  }
}) // export default defineComponent
</script>

<style scoped>
  /* App.vue */
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #bbb;
  }

  #todoForm {
    margin-bottom: 40px;
    text-align: center;
  }

  #mainCard {
    margin: 0 auto;
    margin-top: 20px;
  }

  #app-wrapper {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    margin-top: 40px;
  }
  
  /* Form.vue */
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
