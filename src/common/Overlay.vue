<script setup lang="ts">
import { computed } from 'vue';
import { store } from '../store/store';

const base = computed(() => store.state.modalOverlay.base)
</script>

<template>

    <Teleport to="body">
        <div v-show="base" class="fixed inset-0 w-full h-screen overflow-hidden bg-primary-dark/50 z-[999]"></div>
    </Teleport>

</template>