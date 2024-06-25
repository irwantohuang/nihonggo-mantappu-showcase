<script setup lang="ts">
import Icon from '../../ui/Icon.vue';
import { formatDate, formatTimeAgo, formatDescription } from '../../utils/videoHelper';
import Thumbnail from './Thumbnail.vue';
import ContentDetail from './ContentDetail.vue'
import TextIcon from '../../ui/TextIcon.vue'
import Channel from './Channel.vue'
import { ref } from 'vue';
import ThumbnailOverlay from './ThumbnailOverlay.vue';

const props = defineProps({
    openDetail: Boolean,
    video: Object
})

defineEmits([
    'toggleOverlay'
])
const show = ref(false)
const handleMouseEnter = () => show.value = true
const handleMouseLeave = () => show.value = false
</script>

<template>
    <Teleport to="body">
        <Transition name="slide-left">
            <div v-if="openDetail"
                class="z-[1001] bg-primary-light fixed inset-y-0 right-0 shadow-2xl w-full md:w-[80%] flex">
                <Icon @click="$emit('toggleOverlay')" icon="fa-solid fa-xmark" type="Primary"
                    class="text-3xl w-[30px] h-[30px] absolute top-4 right-4 " />


                <div class="container mx-auto py-[35px]">

                    <header>
                        <h1 class="md:max-w-[400px] lg:max-w-[600px] lg:text-base text-left text-sm font-medium opacity-75 transition-all duration-100 ease-in text-primary-dark hover:text-primary-dark-200">
                            {{ video?.snippet.title }}
                        </h1>
                        
                        <div class="mt-2 flex items-center justify-between md:justify-normal md:gap-6">
                            <TextIcon class="text-xs" :useIcon="true" icon="fa-solid fa-clock">
                                {{ formatTimeAgo(video?.snippet.publishedAt) }}
                            </TextIcon>
                            <TextIcon class="text-xs" :useIcon="true" icon="fa-solid fa-calendar">
                                {{ formatDate(video?.snippet.publishedAt) }}
                            </TextIcon>
                        </div>
                    </header>

                    <div class="border-t border-primary-light-300/50 my-4"></div>


                    <div class="overflow-scroll max-h-[380px]">
                        <div class="flex flex-col md:flex-row gap-4">
                            <div @mouseenter="handleMouseEnter()" @mouseleave="handleMouseLeave()" class="hover:scale-[102%] aspect-video md:w-[400px] lg:w-[600px] relative rounded-md overflow-hidden">
                                <Thumbnail :video="video" />
                                <ThumbnailOverlay :show="show" :videoId="video?.contentDetails.videoId" transition-name="fade" overlay-type="icon" />
                            </div>

                            <div class="border-l border-primary-light-300/50 mx-4"></div>

                            <div class="md:flex flex-col gap-4 h-full hidden">
                                <ContentDetail :content="video?.contentDetails" />
                                <button class="btn btn-primary">
                                    <a target="_blank":href="`https://www.youtube.com/watch?v=${video?.contentDetails.videoId}`">
                                        Watch Now
                                    </a>
                                </button>
                            </div>
                        </div>

                        <div class="border-t border-primary-light-300/50 my-4"></div>

                        <ContentDetail class="md:hidden" :content="video?.contentDetails" />


                        <div class="description">
                            <p class="py-2" v-for="(text, index) in formatDescription(props.video?.snippet.description)"
                                :key="index" v-html="text"></p>
                        </div>
                    </div>

                    <div class="border-t border-primary-light-300/50 my-4"></div>

                    <div class="account">
                        <Channel />
                    </div>

                </div>

            </div>
        </Transition>
    </Teleport>
</template>