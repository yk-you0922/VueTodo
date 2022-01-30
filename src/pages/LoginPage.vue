<template>
  <div id="login-wrapper">
    <h1 style="color: #fff">Login Page</h1>
    <button @click="onClickCallUsers">users</button>
  </div><!-- #login-wrapper -->
</template>

<script lang="ts">
import { 
  defineComponent,
  reactive
} from 'vue';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { User } from '../types/User';

export default defineComponent ({
  name: 'LoginPage',
  components: {
    // コンポーネント化したものをここで宣言
  },
  setup() {
    // 参照するオブジェクト
    const state = reactive({
      appTitle: 'VueTodo',
    })

    const target: AxiosRequestConfig = {
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET"
    }
    const onClickCallUsers = () => {
      axios(target)
        .then((response: AxiosResponse<Array<User>>) => {
          const { data, status } = response;
          console.log(response);
          console.log(data, status);
        })
    }

    return {
      state,
      onClickCallUsers,
    }
  }
}) // export default defineComponent
</script>

<style scoped>

</style>
