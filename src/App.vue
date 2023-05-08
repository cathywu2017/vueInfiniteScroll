<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheRepoBlock from './components/TheRepoBlock.vue'
</script>

<template>
  <header>
    Infinite Scrolling
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>
  <div class="container">
    <TheRepoBlock />
  </div>

  <!-- <RouterView /> -->
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
  text-align: center;
}
</style>
