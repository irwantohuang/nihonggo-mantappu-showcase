<script setup lang="ts">
import { ref } from 'vue';
import { getThumbnailsUrl } from '../../utils/thumbnailsHelper';
import { convertToMMSS, formatView, formatDate } from '../../utils/videoHelper'

defineProps({
    video: Object
})

const show = ref(false)

const handleMouseEnter = () => show.value = true
const handleMouseLeave = () => show.value = false


</script>

<template>
    <div class="relative">
        <div class="relative h-auto rounded-md overflow-hidden bg-red-300" @mouseenter="handleMouseEnter()" @mouseleave="handleMouseLeave()">
            <img :src="getThumbnailsUrl(video?.snippet.thumbnails)" alt="" class="rounded-md"> 
            <p class="absolute bottom-1 right-1 px-2 py-[2px] text-xs font-medium rounded-sm text-primary-light bg-primary-dark/60">{{ convertToMMSS(video?.contentDetails.videoDuration) }}</p>


            <Transition name="fade-up">
                <div v-show="show" class="absolute inset-x-0 top-0 rounded-md bg-primary-dark/75 flex items-center justify-center h-full">
                    <button class="btn btn-primary text-sm">
                        <a :href="`https://www.youtube.com/watch?v=${video?.contentDetails.videoId}`" target="_blank">
                            Watch Now
                        </a>
                    </button>
                </div>
            </Transition>

        </div>


        <div class="mt-1 px-1">
            <h1 class="text-sm font-medium opacity-75 ">{{ video?.snippet.title }}</h1>

            <div class="mt-2 flex items-center justify-between">
                <p class="text-xs font-medium opacity-50">{{ formatView(video?.contentDetails.viewCount) }}</p>
                <p class="text-xs font-medium opacity-50">{{ formatDate(video?.snippet.publishedAt) }}</p>
            </div>
        </div>



    </div>
</template>

<style scoped> 
    .fade-up-enter-active,
    .fade-up-leave-active {
        @apply duration-500 transition-all ease-in-out transform
    }

    .fade-up-enter-from, .fade-up-leave-to {
        @apply translate-y-[-100%]
    }

    .fade-up-enter-to, .fade-up-leave-from {
        @apply translate-y-0
    }
</style>