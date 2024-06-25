<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { store } from '../../store/store';
import { assignChannelRequest } from '../../request/ChannelRequest';
import { formatNumeral } from '../../utils/videoHelper';
import TextIcon from '../../ui/TextIcon.vue';
import SocialMedia from '../../common/SocialMedia.vue'
import { teams } from '../../data/team';

onMounted(() => store.dispatch('channel/getChannel', assignChannelRequest()))
const channel = computed(() => store.state.channel.items);

const member = ref(teams.find(t => t.id === 1))
</script>

<template>

    <footer id="footer" class="mt-[50px] py-[50px] relative mx-auto bg-primary-light">
        <div class="container mx-auto">
            <div class="flex flex-col lg:flex-row item-start justify-between gap-8">

                <div class="order-1 lg:order-2 flex gap-6 items-start w-full lg:w-1/4">
                    <div class="group lg:order-2 w-[100px] h-[100px] rounded-full overflow-hidden">
                        <img :src="channel?.profilePicture" :alt="channel?.title" class="hover:scale-[110%] transition-all duration-300 ease-in w-full h-full object-cover">
                    </div>

                    <div class="lg:order-1 flex flex-col items-start lg:items-end mt-2">
                        <h1 class="text-xl font-medium text-primary">{{ channel?.title }}</h1>
                        <TextIcon class="text-base">{{ formatNumeral(channel.statistics.subscribers) }} Subscribers
                        </TextIcon>
                        <button class="btn btn-primary w-full">
                            <a :href="`https://www.youtube.com/${channel.url}`" target="_blank">Subscribe</a>
                        </button>
                    </div>
                </div>

                <div class="flex flex-col w-full lg:w-3/4 max-w-3xl order-2 lg:order-1">
                    <p class="text-base font-normal text-justify text-primary-dark-200">{{ channel?.description }}</p>

                    <div class="mt-2 lg:mt-2 flex flex-row gap-6">
                        <SocialMedia :socialMedia="member?.socialMedia" />
                    </div> 
                </div>
            </div>

            <div class="border-t border-t-primary-dark-200 my-4"></div>

            <p class="text-center font-medium text-base text-primary-dark-200/75">Copyright &copy; Irwanto Huang 2024. All rights reserved</p>
        </div>
    </footer>

</template>