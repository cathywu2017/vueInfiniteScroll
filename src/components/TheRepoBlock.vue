<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import axios from 'axios';
import RepoItem from './RepoItem.vue';

const data = ref([]);
const len = ref(1);
const scrollTop = ref(0);
const loading = ref(false);

const uri = import.meta.env.VITE_BASE_API;

async function getUser(num = 1) {
  loading.value = true;

  try {
    const response = await axios.get(uri, {
      params: {
        per_page: 6,
        page: num,
      },
    });

    data.value = [...data.value, ...response.data];
  } catch (error) {
    console.error(error);
  }

  loading.value = false;
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
    len.value = len.value + 1;

    getUser(len.value);
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
  <div v-if="!!loading" class="loading">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.scrollBlock {
  height: 100%;
  overflow-y: scroll;
  position: relative;
}

div.loading {
  position: absolute;
  width: 100%;
  height: 100vh !important;
  z-index: 999;
  background: rgba(150, 150, 150, 0.3);
  top: -55px;
  left: 0;
}

div.loading  > div.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@keyframes rotation {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
}
</style>
