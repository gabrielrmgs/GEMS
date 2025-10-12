<template>
    <div>
        <CarouselArtigos />
        <AboutUs />
    </div>
</template>
<script setup lang="ts">
import { nextTick, onMounted } from 'vue';
import AboutUs from './AboutUs.vue';
import router from '../router/router';
import CarouselArtigos from './CarouselArtigos.vue';
onMounted(() => {
    const section = router.currentRoute.value.hash.replace("#", "")
    if (section) {
        nextTick(() => window?.document?.getElementById(section)?.scrollIntoView())
    }
})

</script>
