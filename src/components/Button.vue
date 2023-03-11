<script setup lang="ts">
import MyButton3 from "../button/button.tsx";
</script>

<template>
  <div class="buttons">
    <MyButton3 />
    <MyButton3>点击</MyButton3>
    <MyButton3 icon="check" />
    <MyButton3 color="red" icon="message"></MyButton3>
    <MyButton3 color="green"></MyButton3>
  </div>
</template>

<style scoped>
.buttons button {
  margin-right: 10px;
}
</style>
