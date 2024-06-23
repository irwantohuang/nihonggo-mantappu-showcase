<script setup lang="ts">
import Hero from '../../components/Home/Hero.vue';
import HeroContent from '../../components/Home/HeroContent.vue'
</script>

<template>
    <section id="home" class="w-full relative z-10 bg-primary-light">
        <Hero />

        <div class="container mx-auto mt-[20px] ">
            <HeroContent />
        </div>
    </section>
</template>