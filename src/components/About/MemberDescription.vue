<script setup lang="ts">
import SocialMedia from '../../common/SocialMedia.vue'
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
            <SocialMedia :socialMedia="member?.socialMedia" />
        </div>
    </div>
</template>