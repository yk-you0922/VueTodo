<template>
  <Header :title="state.appTitle"/>
  <div id="todo-wrapper">
    <ErrorList :errorMessages="state.errorMessages"/>
    <Form 
      v-model:todos="state.todos"
      @onClickAddTodo="addTodo"
      @onClickError="addError"
    />
    <Card id="mainCard">
      <Item
        v-for="todo in state.todos" :key="todo.id"
        v-model:todoId="todo.id"
        v-model:todoText="todo.text"
        @onClickRemoveTodo="removeTodo"
      />
    </Card>
  </div><!-- #todo-wrapper -->
</template>

<script lang="ts">
import { 
  defineComponent, 
  reactive,
  onMounted,
} from 'vue';
import Header from '../components/Header.vue';
import Card from '../components/Card.vue';
import Form from '../components/Form.vue';
import ErrorList from '../components/ErrorList.vue';
import Item from '../components/Item.vue';
import { Todo } from '../types/Todo';

interface State {
  appTitle: string;
  todoText: string;
  todos: Array<Todo>;
  errorMessages: Array<String>;
}

export default defineComponent ({
  name: 'TodoPage',
  components: {
    // コンポーネント化したものをここで宣言
    Header,
    ErrorList,
    Form,
    Card,
    Item
  },
  setup() {
    // 参照するオブジェクトと初期値
    const state = reactive<State>({
      appTitle: 'VueTodo',
      todoText: '',
      todos: [],
      errorMessages: [],
    })

    // 画面初期表示時にフォーカスイン処理
    onMounted (() => {
      focusForm();
    })

    // Todo追加ボタン押下時の処理
    const addTodo = (value: any) => {
      // Todoオブジェクト作成
      const newTodo: Todo = {
        id: state.todos.length+1,
        text: value.todoTextValue
      }
      // Todoへの追加
      state.todos = [...state.todos, newTodo];
      // 追加完了後、フォーカスを当てる
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
      state.errorMessages = [];
      focusForm();
    }

    // フォームにフォーカスを当てる
    const focusForm = () => {
      const form = document.getElementById("todo");
      form?.focus();
    }

    // エラーを受け取り、表示する
    const addError = (error: string) => {
      // エラー追加前に初期化
      state.errorMessages = [];
      // 子コンポーネントから送られたエラーを配列に格納し、表示
      state.errorMessages.push(error);
      // フォーカス処理
      focusForm();
    }

    return {
      state,
      onMounted,
      addTodo,
      removeTodo,
      addError
    }
  }
}) // export default defineComponent
</script>

<style scoped>
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

  #todo-wrapper {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    margin-top: 40px;
  }

</style>
