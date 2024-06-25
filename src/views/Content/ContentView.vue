<script setup lang="ts">
import { computed, ref } from 'vue';
import { store } from '../../store/store';
import VideoCard from '../../components/Video/VideoCard.vue';
import { Video } from '../../types/Video';
import { handleBaseOverlay } from '../../utils/overlayHelper';
import VideoDetail from '../../components/Video/VideoDetail.vue';

const loading = computed(() => store.state.videoDetail.loading)
const video = computed(() => store.state.videoDetail.pagination)
const loadMore = () => store.dispatch('videoDetail/getPaginationVideo')

let detailVideo = ref<Video>();
const openDetail = ref<boolean>(false);
const openVideoDetail = (id: String) => {
    toggleOverlay();
    const findVideo = video.value.items.find(v => v.id === id);
    if (findVideo) detailVideo.value = findVideo;
}

const toggleOverlay = () => {
    openDetail.value = !openDetail.value;
    handleBaseOverlay(openDetail.value ? 'open' : 'close')
}

</script>

<template>

    <section id="content" class="relative mx-auto z-[30] py-[75px]">
        <div class="container mx-auto">
            <h1 class="text-3xl font-primary font-semibold text-primary text-center">World Trip Content</h1>


            <transition-group v-if="video?.items.length > 1" name="fade-300" tag="div" class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
                <template v-for="vid in video?.items" :key="vid.id">
                        <VideoCard :video="vid" @open-video-detail="openVideoDetail(vid.id)" class="transition-all duration-1000 ease-in" />
                </template>
            </transition-group>

            <VideoDetail :video="detailVideo" :open-detail="openDetail" @toggle-overlay="toggleOverlay" />


            <div class="flex flex-col items-center justify-center mt-8">
                <div v-if="loading" class="flex gap-2 mb-4">
                    <div v-for="n in 3" :key="n" class="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
                </div>
                <button v-else @click="loadMore()" class="btn btn-primary">Load more</button>
            </div>
        </div>
    </section>

</template>