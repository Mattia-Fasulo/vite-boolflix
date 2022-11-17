<template>
    <swiper-slide>
        <h2 v-if="obj.title">{{ obj.title }}</h2>
        <h2 v-else>{{ obj.name }}</h2>
        <h3 v-if="obj.original_title">{{ obj.original_title }}</h3>
        <h3 v-else>{{ obj.original_name }}</h3>
        <div>{{ obj.original_language }}</div>
        <div>{{ obj.vote_average }}</div>
    </swiper-slide>
</template>

<script>
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    Swiper,
    name: 'swiperComponent',
    props: {
        list: ''
    }
}
</script>

<style lang="scss" scoped>

</style>