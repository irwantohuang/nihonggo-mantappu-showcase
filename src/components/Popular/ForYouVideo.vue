<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Pagination } from 'swiper/modules'
import { store } from '../../store/store';
import VideoCard from '../Video/VideoCard.vue'
import { Video } from '../../types/Video';
import VideoDetail from '../Video/VideoDetail.vue';
import { handleBaseOverlay } from '../../utils/overlayHelper';


onMounted(() => store.dispatch('videoDetail/getMostWatchVideos'));

const modules = [Pagination]
const swiperBreakpoint = ref(
    {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
    }
)

const video = computed(() => store.state.videoDetail.mostWatch);

let detailVideo = ref<Video>();
const openDetail = ref<boolean>(false);
const openVideoDetail = (id: String) => {
    toggleOverlay();
    const findVideo = video.value.find(v => v.id === id);
    if (findVideo) detailVideo.value = findVideo;
}

const toggleOverlay = () => {
    openDetail.value = !openDetail.value;
    handleBaseOverlay(openDetail.value ? 'open' : 'close')
}
</script>

<template>

    <div class="mt-2">
        <swiper space-between="10" :pagination="true" :modules="modules" :breakpoints="swiperBreakpoint" class="mySwiper pb-8">
            <swiper-slide v-for="vid in video" :key="vid.id">
                <VideoCard :video="vid" @open-video-detail="openVideoDetail(vid.id)"/>
            </swiper-slide>
        </swiper>
    </div>
    

    <VideoDetail :video="detailVideo" :open-detail="openDetail" @toggle-overlay="toggleOverlay" />

</template>