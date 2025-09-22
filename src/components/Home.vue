<template>
    <div>

        <Banner />
        <ImageCarousel />
        <AboutUs />
    </div>
</template>
<script setup lang="ts">
import { nextTick, onMounted } from 'vue';
import AboutUs from './AboutUs.vue';
import Banner from './Banner.vue';
import ImageCarousel from './ImageCarousel.vue';
import router from '../router/router';
onMounted(() => {
    const section = router.currentRoute.value.hash.replace("#", "")
    if (section) {
        nextTick(() => window?.document?.getElementById(section)?.scrollIntoView())
    }
})

</script>
