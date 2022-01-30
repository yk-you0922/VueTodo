<template>
  <div id="login-wrapper">
    <div class="login-title">
      <h3>Login</h3>
    </div>
    <Card class="login-card">
      <div>
        <form>
          <div class="login-form">
            <input 
              placeholder="Email" 
              class="login-input"
              v-model="state.email"
            />
          </div>
          <div class="login-form">
            <input
              placeholder="UserName"
              class="login-input"
              v-model="state.username"
            />
          </div>
          <button 
            class="login-btn"
            @click="onClickLogin($event, state)"
          >
            ログイン
          </button>
        </form>
      </div>
    </Card>
  </div><!-- #login-wrapper -->
</template>

<script lang="ts">
import { 
  defineComponent,
  reactive
} from 'vue';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { User } from '../types/User';
import Card from '@/components/Card.vue';
import { useRouter } from 'vue-router';

interface State {
  appTitle: String;
  email: String;
  username: String
}

export default defineComponent ({
  name: 'LoginPage',
  components: {
    // コンポーネント化したものをここで宣言
    Card
  },
  setup() {
    // 参照するオブジェクト
    const state = reactive<State>({
      appTitle: 'VueTodo',
      email: '',
      username: ''
    })

    // vue-routerによる遷移
    const router = useRouter();

    // 叩き先のAPIURLなどの設定値
    const target: AxiosRequestConfig = {
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET"
    }
    const onClickLogin = (event: MouseEvent, state: State) => {
      event.preventDefault();
      axios(target)
        .then((response: AxiosResponse<Array<User>>) => {
          response.data.forEach((resUser) => {
            // 入力値とJSONの返却地が一致する場合、ログイン処理
            if (resUser.email === state.email && resUser.username === state.username) {
              // /todoへ遷移させる
              router.push('/todo')
            }
          })
        })
        .catch((ex) => {
          // エラー処理
          if (axios.isAxiosError(ex) && ex.response && ex.response.status === 400) {
            console.error("400 Error");
            console.error(ex.message);
          }
        })
    }

    return {
      state,
      onClickLogin,
    }
  }
}) // export default defineComponent
</script>

<style scoped>
  #login-wrapper {
    text-align: center;
  }

  .login-title {
    color: #eee;
    font-size: 40px;
  }

  .login-card {
    margin: 0 auto;
  }

  /* フォーム+ボタン */
  .login-form {
    margin-top: 20px;
  }

  .login-form input {
    width: 80%;
    padding: 10px;
    border-radius: 8px;
  }

  .login-btn {
    width: 20%;
    padding: 10px;
    margin-top: 20px;
    background-color: teal;
    color: #eee;
    border-radius: 8px;
    font-weight: bold;
    font-size: 15px;
  }

  .login-btn:hover {
    opacity: 0.8;
    cursor: pointer;
  }
</style>
