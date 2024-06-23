<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    icon: String,
    type: String
})

const type = ref<String>('');

if (props.type === 'Primary') type.value = 'primary'
if (props.type === 'Secondary') type.value = 'secondary'

</script>

<template>

    <div
        class="icon"
        :class="type">
        <fa-icon :icon="icon" />
    </div>

</template>