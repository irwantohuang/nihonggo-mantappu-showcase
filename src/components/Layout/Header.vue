<script setup lang="ts">
import { ref } from 'vue';
import { menu } from './../../data/menu'
import NavMobile from './NavMobile.vue'
import Icon from '../../ui/Icon.vue';
import { handleBaseOverlay } from '../../utils/overlayHelper'

const hamburger = ref<boolean>(false);
const toggleHamburger = () => {
    hamburger.value = !hamburger.value;
    handleBaseOverlay(hamburger.value ? 'open' : 'close')
}
</script>

<template>
    <header class="sticky top-0 h-[70px] bg-primary z-[100]">
        <div class="container mx-auto h-full">
            <div class="flex justify-between items-center h-full">
                <div class="w-[150px] h-[55px] overflow-hidden">
                    <img src="./../../assets/logo/logo.jpeg" alt=""
                        class="w-full h-full scale-80 object-cover object-center">
                </div>

                <!-- Navigation Bar -->
                <nav>
                    <Icon @click="toggleHamburger()" type="Secondary" icon="fa-solid fa-bars" class="lg:hidden text-3xl w-[30px] h-[30px]"/>
                    <NavMobile :showMenu="hamburger" :listMenu="menu" @toggleHamburger="toggleHamburger" />

                    <ul class="hidden lg:flex h-full gap-8 items-center justify-center">
                        <li v-for="data in menu" class="relative">
                            <router-link 
                                :to="{ name: data.name }" 
                                activeClass="text-primary-light-300 hover:text-primary-light-300"
                                class="group text-primary-light text-base font-medium hover:text-primary-light-200">
                                    {{ data.name }}
                                    <span class="block border-b-2 border-b-primary-light absolute -bottom-1 left-0 transition-transform group-hover:scale-x-75 origin-left w-full scale-x-0 ease-linear"></span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>