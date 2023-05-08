<script setup>
import axios from 'axios';
import RepoItem from './RepoItem.vue';

const uri = 'https://api.github.com/orgs/nodejs/repos';

// const response = await fetch(uri);
// const data = await response.json();
async function getUser() {
  try {
    const response = await axios.get(uri);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getUser();
// console.log(data);

</script>

<template>
  <RepoItem>
    <template #title>
      repo title
    </template>
    <template #description>
      描述
    </template>
      url
  </RepoItem>
</template>

<style scoped></style>
