<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import axios from 'axios';
import RepoItem from './RepoItem.vue';

const data = ref([]);
const len = ref(6);
const scrollTop = ref(0);

const uri = 'https://api.github.com/orgs/nodejs/repos';

async function getUser(num = 6) {
  try {
    const response = await axios.get(uri, {
      params: {
        per_page: num,
      },
    });

    data.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  getUser();

  document.querySelector('.scrollBlock').addEventListener('scroll', () => {
    scrollTop.value = document.querySelector('.scrollBlock').scrollTop;
  })
});

onUnmounted(() => {
  document.querySelector('.scrollBlock').removeEventListener('scroll', () => {
    scrollTop.value = document.querySelector('.scrollBlock').scrollTop;
  })
})

watch(scrollTop, (scrollTop, prevScrollTop) => {
  const clientHeight = document.querySelector('.scrollBlock').clientHeight ;
  const scrollHeight = document.querySelector('.scrollBlock').scrollHeight;

  if(scrollTop + clientHeight === scrollHeight) {
    len.value = len.value + 6;

    // 每頁數量只有100個
    len.value < 100 && getUser(len.value);
  };
});
</script>

<template>
  <div class="scrollBlock">
    <RepoItem v-for="{ name, description, url } in data">
      <template #title>
        {{ name }}
      </template>
      <template #description>
        {{ description }}
      </template>
        {{ url }}
    </RepoItem>
  </div>
</template>

<style scoped>
.scrollBlock {
  height: 100%;
  overflow-y: scroll;
}
</style>
