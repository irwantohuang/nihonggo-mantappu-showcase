<script setup lang="ts">
import { ref } from 'vue';
import { router } from '../router/router';

const show = ref(false)

const transition = (next: any) => {
    const overlay = document.querySelectorAll('.overlay')
    overlay.forEach((e) => e.classList.add('active'))

    setTimeout(() => {
        next();
        setTimeout(() => {
            overlay.forEach((e) => e.classList.remove('active'));
        }, 500);
    }, 500);

    window.scrollTo({ top: 0 });
}

router.beforeEach((_, from, next) => {
    if (from.name) {
        show.value = true;
        transition(next)
    } else {
        show.value = false
        next();
    }
})

</script>

<template>

    <div class="absolute top-0 left-0 w-full h-full flex z-[1] pointer-events-none">
        <div v-for="n in 5" :key="n"
            class="overlay w-1/5 h-full bg-primary transform -translate-y-full pointer-events-none transition-transform duration-500 ease-in-out">
        </div>
    </div>
</template>

<style scoped>
.overlay:nth-child(1) {
  transition-delay: 0.2s;
}
.overlay:nth-child(2) {
  transition-delay: 0.3s;
}
.overlay:nth-child(3) {
  transition-delay: 0.4s;
}
.overlay:nth-child(4) {
  transition-delay: 0.5s;
}
.overlay:nth-child(5) {
  transition-delay: 0.6s;
}

.overlay.active {
  @apply translate-y-0;
}
</style>