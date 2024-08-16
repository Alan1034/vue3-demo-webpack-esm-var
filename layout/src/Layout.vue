<!--
 * @Author: 陈德立*******419287484@qq.com
 * @Date: 2024-08-16 11:40:53
 * @LastEditTime: 2024-08-16 16:32:36
 * @LastEditors: 陈德立*******419287484@qq.com
 * @Github: https://github.com/Alan1034
 * @Description: 
 * @FilePath: \vue3-demo-webpack-esm-var\layout\src\Layout.vue
 * 
-->
<template>
  <Content />
  <Button />
  <UnusedButton />
  <hr />
  <home-app />
  <hr />
  <home-content />
  <home-button />
  <hr />
  <hr />
</template>

<script>
import Content from "./components/Content.vue";
import Button from "./components/Button.js";
import UnusedButton from "./components/UnusedButton.vue";
export default {  components: {
    Content,
    Button,
    UnusedButton,
  },};
</script>

<style scoped>
img {
  width: 200px;
}
.h1 {
  border: 5px solid red !important;
  padding: 1px !important;
}
.section {
  border: 1px solid black;
  padding: 10px;
}
</style>
