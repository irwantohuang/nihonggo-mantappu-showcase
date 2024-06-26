<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { store } from '../../store/store';
import { assignChannelRequest } from '../../request/ChannelRequest';
import { formatNumeral } from '../../utils/videoHelper';
import TextIcon from '../../ui/TextIcon.vue';


onMounted(() => store.dispatch('channel/getChannel', assignChannelRequest()))
const channel = computed(() => store.state.channel.items);
</script>

<template>
    <div class="bg-primary-light-200 px-6 shadow-lg rounded-lg w-full py-3 flex gap-6 items-start absolute inset-x-0 bottom-0">
        <div class="rounded-full w-[100px] h-[100px] overflow-hidden">
            <img :src="channel.profilePicture" alt="" class="w-full h-full object-cover">
        </div>

        <div class="flex flex-col justify-between h-[100px] py-2">
            <a :href="`https://www.youtube.com/${channel.url}`" target="_blank" class="text-lg font-semibold hover:text-primary transition-all duration-100 ease-in cursor-pointer">{{ channel.title }}</a>
            <div class="flex gap-4">
                <TextIcon class="text-xs">• {{ formatNumeral(channel.statistics.subscribers) }} Subscribers</TextIcon> 
                <TextIcon class="text-xs hidden md:block">• {{ formatNumeral(channel.statistics.video) }} Video</TextIcon>
                <TextIcon class="text-xs hidden md:block">• {{ formatNumeral(channel.statistics.views) }} Views</TextIcon>
            </div>

            <button class="btn btn-primary w-full md:w-1/2 mt-1">
                <a :href="`https://www.youtube.com/${channel.url}`" target="_blank">Subscribe</a>
            </button>
        </div>
    </div>
</template>