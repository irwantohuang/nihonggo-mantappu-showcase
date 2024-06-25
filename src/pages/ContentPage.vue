<script setup lang="ts">
import { onMounted } from 'vue';
import ContentView from '../views/Content/ContentView.vue'
import { store } from '../store/store';

onMounted(() => getVideo())

const getVideo = () => store.dispatch('videoDetail/getPaginationVideo')

</script>

<template>
    <div>
        <h1>Hello Wolrd</h1>

        <ContentView />

        <button @click="getVideo()">Fetch Lagi Bang</button>
    </div>
</template>