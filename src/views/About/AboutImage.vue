<script setup lang="ts">
defineProps({
    team: Object,
    active: Boolean,
})
</script>

<template>
    <img :src="team?.image" :alt="team?.name"
        class="w-full h-full object-cover object-top transition-all duration-1000 ease-in-out"
        :class="active ? 'cursor-default' : 'cursor-pointer '">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>

</template>