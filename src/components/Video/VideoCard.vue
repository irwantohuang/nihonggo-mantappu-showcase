<script setup lang="ts">
import { ref } from 'vue';
import { formatNumeral, formatDate } from '../../utils/videoHelper'
import DetailButton from '../../ui/DetailButton.vue';
import Thumbnail from './Thumbnail.vue'
import ThumbnailOverlay from './ThumbnailOverlay.vue';

defineProps({
    video: Object
})

const show = ref(false)
const handleMouseEnter = () => show.value = true
const handleMouseLeave = () => show.value = false
</script>

<template>
    <div class="relative rounded-md overflow-hidden transition-all duration-300 ease-in hover:-translate-y-2">
        <div class="relative h-auto rounded-md overflow-hidden bg-primary-light-200" @mouseenter="handleMouseEnter()"
            @mouseleave="handleMouseLeave()">
            <Thumbnail :video="video" />

            <ThumbnailOverlay :show="show" :videoId="video?.contentDetails.videoId" transition-name="fade-up" overlay-type="button" />
        </div>

        <div class="mt-1 px-1">
            <DetailButton @click="$emit('openVideoDetail', video?.id)" :name="video?.snippet.title"></DetailButton>
            <div class="mt-2 flex items-center justify-between">
                <p class="text-xs font-medium opacity-50">{{ formatNumeral(video?.contentDetails.viewCount) }} Views</p>
                <p class="text-xs font-medium opacity-50">{{ formatDate(video?.snippet.publishedAt) }}</p>
            </div>
        </div>
    </div>
</template>
