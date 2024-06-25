<script setup lang="ts">
interface Props {
    title: string,
    bio?: string | string[],
    breaks: boolean,
}

defineProps<Props>();
</script>
<template>

    <div class=" w-full py-2 flex gap-2">
        <div class="w-1/3 lg:w-1/4">
            <p class="text-base font-medium text-primary-light-300">{{ title }}</p>
        </div>

        <div class="w-2/3 lg:w-3/4 text-base font-medium text-primary-dark-200">
            <p v-if="Array.isArray(bio)">
                <span v-for="(text, index) in bio" :key="index">
                    {{ text }}
                    <br v-if="breaks">
                </span>
            </p>
            <p v-else>{{ bio }}</p>
        </div>
    </div>
</template>