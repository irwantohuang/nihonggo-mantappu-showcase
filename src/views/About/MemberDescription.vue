<script setup lang="ts">
defineProps({
    member: Object
})
</script>

<template>
    <div class="flex flex-col w-full h-auto py-6 px-4">
        <h1 class="text-3xl lg:text-5xl font-semibold text-primary">{{ member?.name }}</h1>
        <p class="mt-2 lg:mt-4 text-base font-normal text-justify text-primary-dark-200">{{ member?.description }}
        </p>

        <div class="mt-4 lg:mt-8 flex flex-row gap-6">
            <a v-for="(social, index) in member?.socialMedia" :key="index" :href="social.link" target="_blank"
                class="text-4xl  w-[50px] h-[50px] flex items-center justify-center rounded-md transition-all duration-300 ease-linear"
                :class="social.link === '' ? 'text-primary-200/50 cursor-no-drop' : 'text-primary-200 hover:text-primary/85 cursor-pointer  '">
                <fa-icon :icon="social.icon" />
            </a>
        </div>
    </div>
</template>