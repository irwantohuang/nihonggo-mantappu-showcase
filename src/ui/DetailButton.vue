<script setup lang="ts">
defineProps({
    name: String
})
</script>


<template>
    <button class="text-left text-sm font-medium opacity-75 transition-all duration-100 ease-in text-primary-dark hover:text-primary">
        {{ name }}
    </button>
</template>