<script setup lang="ts">
import AboutImage from '../../components/About/AboutImage.vue'
import BiodataDetail from '../../components/About/BiodataDetail.vue'
import MemberDescription from '../../components/About/MemberDescription.vue'
import { onMounted, ref, watch } from 'vue';
import { teams } from '../../data/team'
import { Teams } from '../../types/Teams/Teams';

const activeMember = ref<Teams>();
const inActiveMember = ref<Teams[]>([]);
const activeId = ref<number>(1);

const changeId = ((id: number) => activeId.value = id);
 
onMounted(() => {
    changeActive(activeId.value)
})

watch(activeId, (newActiveId) => {
    if (newActiveId) {
        changeActive(newActiveId)
    }
})

const changeActive = (id: number) => {
    activeMember.value = teams.find(team => team.id === id);
    inActiveMember.value = teams.filter(team => team.id !== id);
}

</script>

<template>

    <section id="about" class="relative py-[75px]">
        <div class="container mx-auto">
            <div class="title">
                <h1 class="text-2xl lg:text-5xl font-medium text-primary">Waseda Boys Teams</h1>
                <!-- <p class="text-sm font-normal text-primary-dark-200">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, itaque!</p> -->
            </div>

            <div class="mt-12 flex flex-col lg:flex-row gap-2">
                <div class="flex items-center justify-center flex-col gap-4 lg:w-[750px]">
                        <div class="w-full h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden relative">
                            <AboutImage :team="activeMember" :active="true" />
                        </div>

                    <div class="flex flex-row gap-2 w-full items-center justify-center">
                        <div class="w-[33%] h-[150px] overflow-hidden relative" v-for="team in inActiveMember" :key="team.id" @click="changeId(team.id)">
                            <AboutImage :team="team" :active="false" />
                        </div>
                    </div>
                </div>

                <MemberDescription :member="activeMember" />
            </div>

            <div class="border-t-2 border-primary-dark-200 mt-12 mb-4"></div>

            <BiodataDetail :biodata="activeMember?.biodata"/>
        </div>
    </section>

</template>