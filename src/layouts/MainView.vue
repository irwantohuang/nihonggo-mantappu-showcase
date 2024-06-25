<script setup lang="ts">
import { RouterView } from 'vue-router';
import PageTransition from '../components/PageTransition.vue'

</script>

<template>
    <main class="h-[3000px] max-w-[1920px] mx-auto overflow-hidden">
        <RouterView v-slot="{ Component }">
            <Transition name="fade" mode="out-in">
                <Component :is="Component" />
            </Transition>
        </RouterView> 
    </main>


    <PageTransition />
</template>