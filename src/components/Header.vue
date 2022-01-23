<template>
  <div class="header">
    <h1 class="title"><a href="#">Vue Practice App</a></h1>
    <div class="items">
      <ul class="flex">
        <li class="item-link"><a href="#">HOME</a></li>
        <li class="item-link"><a href="#">ABOUT</a></li>
        <li class="item-link"><a href="#">LOGIN</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
 
 }
})
export default class Header extends Vue {

}
</script>

<!-- "scoped"と付けることでこのコンポーネント内のみ有効なCSSと宣言している -->
<style scoped>
  .header {
    background-color: #008080;
    width: 100%;
    height: 100px;
    padding: 10px;
  }

  .title {
    font-weight: bold;
    font-size: 48px;
    margin: 5px 10px;
  }

  .title a {
    color: #eee;
    text-decoration: none;
  }

  .title a:hover {
    opacity: 0.8;
  }

  .items {
    text-align: right;
  }

  .flex {
    display: flex;
  }

  ul {
    justify-content: right;
    align-items: right;
    margin-right: 40px;
  }

  .item-link {
    display: inline-block;
    list-style: none;
    margin-left: 30px;
  }

  .item-link a {
    text-decoration: none;
    cursor: pointer;
    color: #eee;
  }

  .item-link a:hover {
    opacity: 0.8;
    color: #fff;
  }
</style>
