<script setup lang="ts">
import BiodataText from './BiodataText.vue'
    defineProps({
        biodata: Object
    })
</script>

<template>
    <div class="flex flex-col">
        <h1 class="text-2xl text-opacity-90 font-medium text-primary">Biodata</h1>
        <div class="mt-4 flex flex-col gap-2 items-center justify-center">
            <BiodataText title="Full name" :bio="biodata?.fullName" :breaks="false" />
            <BiodataText title="Nickname" :bio="biodata?.nickname" :breaks="false" />
            <BiodataText title="Date of Birth" :bio="biodata?.dob" :breaks="false" />
            <BiodataText title="Nationality" :bio="biodata?.nationality" :breaks="false" />
            <BiodataText title="Height" :bio="biodata?.height" :breaks="false" />
            <BiodataText title="Zodiac" :bio="biodata?.zodiac" :breaks="false" />
            <BiodataText title="Religion" :bio="biodata?.religion" :breaks="false" />
            <BiodataText title="Education" :bio="biodata?.education" :breaks="true" />
        </div>
    </div>
</template>