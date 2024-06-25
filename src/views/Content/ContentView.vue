<script setup lang="ts">
import { computed } from 'vue';
import { store } from '../../store/store';
import VideoCard from '../../components/Video/VideoCard.vue';

const loading = computed(() => store.state.videoDetail.loading)
const video = computed(() => store.state.videoDetail.pagination)
const loadMore = () => store.dispatch('videoDetail/getPaginationVideo')
</script>

<template>

    <section id="content" class="relative mx-auto z-[30] py-[12px]">
        <div class="container mx-auto">
            <h1 class="text-3xl font-primary font-semibold text-primary text-center">Content</h1>


            <transition-group v-if="video?.items.length > 1" name="fade-300" tag="div" class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
                <template v-for="vid in video?.items" :key="vid.id">
                        <VideoCard :video="vid" class="transition-all duration-1000 ease-in" />
                </template>
            </transition-group>

            <div class="flex flex-col items-center justify-center mt-8">
                <div v-if="loading" class="flex gap-2 mb-4">
                    <div v-for="n in 3" :key="n" class="w-5 h-5 rounded-full animate-pulse bg-primary"></div>
                </div>
                <button v-else @click="loadMore()" class="btn btn-primary">Load more</button>
            </div>
        </div>
    </section>

</template>