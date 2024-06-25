<script setup lang="ts">
defineProps({
    socialMedia: Object
})
</script>

<template>
    <a v-for="(social, index) in socialMedia" 
        :key="index" 
        :href="social.link" 
        target="_blank"
        class="text-4xl  w-[50px] h-[50px] flex items-center justify-center rounded-md transition-all duration-300 ease-linear"
        :class="social.link === '' ? 'text-primary-200/50 cursor-no-drop' : 'text-primary-200 hover:text-primary/85 cursor-pointer'">
            <fa-icon :icon="social.icon" />
    </a>
</template>