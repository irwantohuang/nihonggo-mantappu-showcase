<script setup lang="ts">
import { ref } from 'vue';
import { formatView, formatDate } from '../../utils/videoHelper'
import DetailButton from '../../ui/DetailButton.vue';
import Thumbnail from './Thumbnail.vue'

defineProps({
    video: Object
})

const show = ref(false)
const handleMouseEnter = () => show.value = true
const handleMouseLeave = () => show.value = false
</script>

<template>
    <div class="relative">
        <div class="relative h-auto rounded-md overflow-hidden bg-red-300" @mouseenter="handleMouseEnter()"
            @mouseleave="handleMouseLeave()">
            <Thumbnail :video="video" />

            <Transition name="fade-up">
                <div v-show="show"
                    class="absolute inset-x-0 top-0 rounded-md bg-primary-dark/75 flex items-center justify-center h-full">
                    <button class="text-sm btn btn-primary">
                        <a :href="`https://www.youtube.com/watch?v=${video?.contentDetails.videoId}`" target="_blank">
                            Watch Now
                            <fa-icon class="ms-1" icon="fa-solid fa-up-right-from-square" />
                        </a>
                    </button>
                </div>
            </Transition>
        </div>
        
        <div class="mt-1 px-1">
            <DetailButton @click="$emit('openVideoDetail', video?.id)" :name="video?.snippet.title"></DetailButton>
            <div class="mt-2 flex items-center justify-between">
                <p class="text-xs font-medium opacity-50">{{ formatView(video?.contentDetails.viewCount) }}</p>
                <p class="text-xs font-medium opacity-50">{{ formatDate(video?.snippet.publishedAt) }}</p>
            </div>
        </div>
    </div>
</template>
