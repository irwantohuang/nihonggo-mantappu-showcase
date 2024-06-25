<script setup lang="ts">
import { onMounted } from 'vue';
import ContentView from '../views/Content/ContentView.vue'
import { store } from '../store/store';

onMounted(() => store.dispatch('videoDetail/getPaginationVideo'))
</script>

<template>
    <ContentView />
</template>