<script setup lang="ts">
defineProps({
    team: Object,
    active: Boolean,
})
</script>

<template>
    <img :src="team?.image" :alt="team?.name"
        class="w-full h-full object-cover object-top transition-all duration-500 ease-in-out group-hover rounded-xl"
        :class="active ? 'cursor-default' : 'cursor-pointer hover:scale-[105%]'">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>

</template>