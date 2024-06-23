<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Pagination } from 'swiper/modules'
import { store } from '../../store/store';
import { PlaylistItemRequest, assignPlaylistItemRequest } from '../../request/PlaylistItemRequest';
import VideoCard from '../Video/VideoCard.vue'
// import { getThumbnailsUrl } from '../../utils/thumbnailsHelper'

const request = ref<PlaylistItemRequest>(
    assignPlaylistItemRequest(
        ['snippet', 'contentDetails'],
        'video',
        'PLXE8AUnn_XpX59_DocpuX5e2d9tG1pY5D',
        10
    )
)

onMounted(() => store.dispatch('playlistItem/getAllPlaylistItems', request.value));
const modules = [Pagination]
const swiperBreakpoint = ref(
    {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
    }
)
const video = computed(() => store.state.videoDetail.items);



</script>

<template>

    <div class="mt-12 border border-red-200 px-4">
        <swiper space-between="10" :pagination="true" :modules="modules" :breakpoints="swiperBreakpoint" class="mySwiper h-[350px]">
            <swiper-slide v-for="vid in video" :key="vid.id">
                <VideoCard :video="vid"/>
                <!-- <div class="bg-blue-300">
                    Hello World
                    <img :src="getThumbnailsUrl(vid)" alt="">
                </div> -->
            </swiper-slide>
        </swiper>
    </div>

</template>