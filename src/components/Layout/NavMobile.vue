<script setup lang="ts">
import Icon from '../../ui/Icon.vue'
defineProps({
    showMenu: Boolean,
    listMenu: Object,
})
defineEmits([
    'toggleHamburger'
])
</script>

<template>
    <Teleport to="body">
        <Transition name="slide-left">
            <ul v-show="showMenu"
                class="z-[1001] fixed inset-y-0 right-0 w-[65%] lg:hidden flex flex-col gap-4 px-4 py-6 bg-primary-light shadow-2xl">
                <Icon @click="$emit('toggleHamburger')" icon="fa-solid fa-xmark" type="Primary"
                    class="text-3xl w-[30px] h-[30px] absolute top-4 right-4 " />

                <div class="mt-12 flex flex-col gap-4">
                    <li v-for="menu in listMenu" class="flex">
                        <router-link @click="$emit('toggleHamburger')" :to="{ name: menu.name }"
                            class="flex items-center gap-4 ps-4 pe-16 py-1 rounded-sm hover:bg-primary hover:text-primary-light-200"
                            active-class="bg-primary hover:bg-primary-200/90 text-primary-light">
                            <fa-icon :icon="menu.icon" />
                            {{ menu.name }}
                        </router-link>
                    </li>
                </div>
            </ul>
        </Transition>
    </Teleport>
</template>
