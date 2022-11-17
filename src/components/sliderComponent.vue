<template>
    <div class="container">
        <swiper :slides-per-view="6" :space-between="10" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="(item, index) in list" :key="item.id">
                <!-- title -->
                <div v-if="item.title">{{ item.title }}</div>
                <div v-else>{{ item.name }}</div>
                <!-- original title -->
                <div v-if="item.original_title">{{ item.original_title }}</div>
                <div v-else>{{ item.original_name }}</div>
                <!-- flag -->
                <div v-if="(this.flagsAvaiable.includes(item.original_language))">
                    <img class="flags" :src="'/img/' + item.original_language + '.png'"
                        alt="item.original_language +'flag'">
                </div>
                <div>{{ item.original_language }}</div>
                <!-- star -->
                <div>{{ item.vote_average }}</div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css/bundle';


export default {
    name: 'sliderComponent',
    props: {
        list: ''
    },
    components: {
        Swiper,
        SwiperSlide,

    },
    data() {
        return {
            flagsAvaiable: ['de', 'en', 'es', 'fr', 'it', 'ja', 'us']
        }
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
};
</script>

<style lang="scss" scoped>
.swiper-slide {
    padding: 1rem;
    height: 170px;
    width: 400px;
    background-color: white;
    border-radius: 10px;



    &:hover {
        cursor: grab;
    }

    &:active {
        cursor: grabbing;
    }

    .flags {
        width: 30px;
    }
}

.swiper {
    padding: 1rem 1rem;
}
</style>