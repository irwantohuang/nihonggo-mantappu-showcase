<script setup lang="ts">
import { formatNumeral } from '../../utils/videoHelper';
import TextIcon from '../../ui/TextIcon.vue'
defineProps({
    content: Object
})
</script>

<template>
    <div class="data flex items-center justify-end gap-6 md:flex-col md:items-start md:gap-2">
        <TextIcon class="text-xs md:text-base" :useIcon="true" icon="fa-solid fa-thumbs-up">
            {{ formatNumeral(content?.likeCount) }}
            <span class="hidden md:block">Like's</span>
        </TextIcon>
        <TextIcon class="text-xs md:text-base" :useIcon="true" icon="fa-solid fa-comment">
            {{ formatNumeral(content?.commentCount) }}
            <span class="hidden md:block">Comment's</span>
        </TextIcon>
        <TextIcon class="text-xs md:text-base" :useIcon="true" icon="fa-solid fa-eye">
            {{ formatNumeral(content?.viewCount) }}
            <span class="hidden md:block">View's</span>
        </TextIcon>
    </div>
</template>