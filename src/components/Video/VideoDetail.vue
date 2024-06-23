<script setup lang="ts">
import { ref } from 'vue';
import Icon from '../../ui/Icon.vue';
import { formatDate, formatTimeAgo, formatDescription } from '../../utils/videoHelper';
import Thumbnail from './Thumbnail.vue';

const props = defineProps({
    openDetail: Boolean,
    video: Object
})

defineEmits([
    'toggleOverlay'
])

// const formatDesc = () => {
//     formatDescription
// }

const formatDesc = ref<string[]>(formatDescription(props.video?.snippet.description))

</script>

<template>
    <Teleport to="body">
        <Transition name="slide-left">
            <div v-if="openDetail" class="z-[1001] overflow-scroll bg-primary-light fixed inset-y-0 right-0 shadow-2xl w-full md:w-[80%] flex">
                <Icon @click="$emit('toggleOverlay')" icon="fa-solid fa-xmark" type="Primary"
                    class="text-3xl w-[30px] h-[30px] absolute top-4 right-4 " />


                <div class="container mx-auto py-[70px]">

                    <div class="">
                        <h1 class="md:max-w-[400px] lg:max-w-[600px] lg:text-base text-left text-sm font-medium opacity-75 transition-all duration-100 ease-in text-primary-dark hover:text-primary-dark-200">
                            {{ video?.snippet.title }}
                        </h1>


                        <div class="mt-2 flex items-center justify-between">
                            <p class="text-xs font-medium opacity-50 flex items-center gap-2">
                                <fa-icon icon="fa-solid fa-clock" />
                                {{ formatTimeAgo(video?.snippet.publishedAt) }}
                            </p>
                            <p class="text-xs font-medium opacity-50 flex items-center gap-2">
                                <fa-icon icon="fa-solid fa-calendar" />
                                {{ formatDate(video?.snippet.publishedAt) }}
                            </p>
                        </div>
                    </div>

                    <div class="border-t border-gray-300 my-4"></div>


                    <div class="hover:scale-[102%] aspect-video md:w-[400px] lg:w-[600px] relative rounded-md overflow-hidden">
                        <Thumbnail :video="video" />
                    </div>

                    <div class="border-t border-gray-300 my-4"></div>



                    <div class="description">
                        <p class="py-4" v-for="(text, index) in formatDesc" :key="index" v-html="text"></p>
                    </div>

                    <div class="border-t border-gray-300 my-4"></div>

                </div>

            </div>
        </Transition>
    </Teleport>
</template>