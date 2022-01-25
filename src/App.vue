<!-- アプリ全体のベース -->
<template>
  <Header v-bind:title="state.appTitle"/>
  <div id="app-wrapper">
    <ErrorList v-bind:errorMessages="state.errorMessages"/>
    <Form 
      v-model:todoTextValue="state.todoText" 
      v-on:onClickAddTodo="addTodo"
    />
    <Card 
      id="mainCard"
      v-model:todos="state.todos"
      v-on:onClickRemoveTodo="removeTodo"
    />
  </div><!-- #app-wrapper -->
</template>

<script lang="ts">
import { 
  defineComponent, 
  reactive,
} from 'vue';
import Card from './components/Card.vue';
import Form from './components/Form.vue';
import ErrorList from './components/ErrorList.vue';
import Header from './components/Header.vue';
import { Todo } from './types/Todo';
import { ErrorMessage } from './constants/ErrorMessage';
import { MessageManager } from './constants/ErrorMessage';

export default defineComponent ({
  name: 'App',
  components: {
    // コンポーネント化したものをここで宣言
    Header,
    ErrorList,
    Form,
    Card,
  },
  setup(_, context) {
    // 参照するオブジェクト
    const state = reactive({
      appTitle: 'VueTodo',
      todoText: '',
      todos: Array<Todo>(),
      errorMessages: Array<String>(),
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
      state.todoText = '';
      focusForm();
    }

    // deleteボタン押下時の処理
    const removeTodo = (todoId :number) => {
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
      context,
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

</style>
