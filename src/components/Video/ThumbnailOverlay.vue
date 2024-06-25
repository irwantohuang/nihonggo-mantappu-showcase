<script setup lang="ts">
defineProps({
    videoId: String,
    transitionName: String,
    overlayType: String,
    show: Boolean
})
</script>

<template>
    <Transition :name="transitionName">
        <div v-show="show"
            class="absolute inset-x-0 top-0 rounded-md bg-primary-dark/75 flex items-center justify-center h-full">
            <button v-if="overlayType === 'button'" class="text-sm btn btn-primary">
                <a :href="`https://www.youtube.com/watch?v=${videoId}`" target="_blank">
                    Watch Now
                    <fa-icon class="ms-1" icon="fa-solid fa-up-right-from-square" />
                </a>
            </button>

            <a v-else :href="`https://www.youtube.com/watch?v=${videoId}`" target="_blank" class="transition-all duration-200 ease-in text-6xl text-primary-light hover:text-primary">
                <fa-icon icon="fa-solid fa-play" />
            </a>
        </div>
    </Transition>
</template>