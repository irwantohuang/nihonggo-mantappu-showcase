import type { App } from 'vue';

import { FaIcon } from './fontAwesome';
import { router } from '../router/router';
import { store } from '../store/store';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css'

export function registerPlugins(app: App) {
    app
        .use(router)
        .use(store)
        .component('fa-icon', FaIcon)
        .component('Swiper', Swiper)
        .component('SwiperSlide', SwiperSlide)
}