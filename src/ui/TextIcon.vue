<script setup lang="ts">
defineProps({
    icon: String,
    useIcon: Boolean,
})
</script>

<template>
    <p class="font-medium text-primary-dark opacity-50 flex items-center gap-1 transition-all duration-100 hover:opacity-90">
        <fa-icon v-if="useIcon" :icon="icon" />
        <slot />
    </p>
</template>