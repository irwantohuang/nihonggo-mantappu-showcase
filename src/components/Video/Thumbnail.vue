<script setup lang="ts">
import { convertToMMSS } from '../../utils/videoHelper'
defineProps({
    video: Object
})
</script>

<template>

    <img :src="video?.snippet.thumbnails.maxres.url" alt="" class=" h-full w-full object-fill rounded-md"> 
    <p class="absolute bottom-1 right-1 px-2 py-[2px] text-xs font-medium rounded-sm text-primary-light bg-primary-dark/60">{{ convertToMMSS(video?.contentDetails.videoDuration) }}</p>


</template>