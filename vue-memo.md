# Vue 基礎知識  

## Vue3系の特徴
Composition APIの`<script setup>`を利用してコードを記述することが可能になる

## Composition APIとは
https://qiita.com/azukiazusa/items/1a7e5849a04c22951e97 
1. Typescriptのサポート
2. ロジック再利用の難しさ
3. コードの可読性向上   
上記の3つを解決するためのAPI    
vue3系にはデフォルトでインストールされている模様なので、3系から始める人にはデフォルト機能として使いこなす必要がある 

composition-apiの追加
```
$npm add @vue/composition-api
```

→composition-api追加後、yarn serveでエラー発生、Error: Cannot find module 'vue-loader-v16/package.json' 
→対応策としてyarn add lodashコマンドで解決（原因はまた別途調査する）https://www.samanthaming.com/journal/3-how-to-use-lodash-with-vue/

refはプリミティブな値 
reactiveはオブジェクトを宣言するときに利用する模様。※ただし、確定した使い方は決まっていない模様

## CSSのスコープ  
スコープ・・・影響範囲のこと。  
ただし、中に別の子コンポーネントが存在し、その子コンポーネントも同じクラス名などがある場合は多重でCSSが当たるので注意。
```javascript
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 以下HTML -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- "styleタグにscopedとつけることでこのコンポーネント内部にのみ影響を与えるCSSに限定することが可能" -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
```

## Typescriptの追加
https://v3.ja.vuejs.org/guide/typescript-support.html#webpack-%E3%81%AE%E8%A8%AD%E5%AE%9A

```
# 1. Vue CLI をまだインストールしていなければ、インストールします
npm install --global @vue/cli

# 2. 新しいプロジェクトを作成し、"Manually select features" を選択してください
vue create my-project-name

# もしすでに TypeScript をもたない Vue CLI で作成したプロジェクトがある場合、適切な Vue CLI プラグインを追加してください:
vue add typescript
```