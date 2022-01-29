<template>
  <Header :title="state.appTitle"/>
  <div id="login-wrapper">
    <h1 style="color: #fff">Login Page</h1>
  </div><!-- #login-wrapper -->
</template>

<script lang="ts">
import { 
  defineComponent,
  reactive
} from 'vue';
import Header from '../components/Header.vue';

export default defineComponent ({
  name: 'App',
  components: {
    // コンポーネント化したものをここで宣言
    Header,
  },
  setup() {
    // 参照するオブジェクト
    const state = reactive({
      appTitle: 'VueTodo',
    })
    return {
      state
    }
  }
}) // export default defineComponent
</script>

<style scoped>

</style>
