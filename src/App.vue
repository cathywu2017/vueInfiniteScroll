<script setup>
import TheRepoBlock from './components/TheRepoBlock.vue';
</script>

<template>
  <header>
    Infinite Scrolling
  </header>
  <div class="container">
    <TheRepoBlock />
  </div>

</template>

<style scoped>
header {
  width: 100%;
  padding: 15px 0;
  text-align: center;
  background-color: #000;
}

.container {
  width: 100%;
  height: calc(100vh - 54px);
  text-align: center;
}
</style>
