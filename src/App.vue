<!--
 * @Date: 2023-03-11 00:04:13
 * @LastEditors: aibo chang aibochang@163.com
 * @LastEditTime: 2023-03-11 00:09:35
 * @FilePath: \ReBack\my-ui\src\App.vue
 * @Description: 
-->
<script setup lang="ts">
import HelloWorld from "./components/Button.vue";
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
