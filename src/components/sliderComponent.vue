<template>
    <div class="container">
        <swiper :slides-per-view="6" :space-between="10" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="(item, index) in list" :key="item.id">
                <img class="img-movie" :src="store.apiUrlImg + store.sizeImg + item.poster_path" alt="">
                <!-- flag -->
                <div class="flag-container" v-if="(this.flagsAvaiable.includes(item.original_language))">
                    <img class="flags" :src="'/img/' + item.original_language + '.png'"
                        alt="item.original_language +'flag'">
                </div>
                <!-- star -->
                <div class="stars">
                    <span v-for="n in 5" class="fa-star"
                        :class="(n <= Math.ceil(item.vote_average / 2)) ? 'fa-solid' : 'fa-regular'">
                    </span>
                </div>

                <div class="info">


                    <!-- title -->
                    <h3 v-if="item.title">{{ item.title }}</h3>
                    <h3 v-else>{{ item.name }}</h3>
                    <!-- original title -->
                    <h4 v-if="item.original_title">{{ item.original_title }}</h4>
                    <h4 v-else>{{ item.original_name }}</h4>

                    <div v-else>{{ item.original_language }}</div>


                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css/bundle';
import { store } from '../store';


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
            store,
            flagsAvaiable: ['de', 'en', 'es', 'fr', 'it', 'ja', 'us'],
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
    // computed: {
    //     star() {
    //         return Math.ceil(this.item.vote_average / 2)
    //     }
    // }
};
</script>

<style lang="scss" scoped>
.swiper {
    overflow: visible;


}

.swiper-slide {

    position: relative;
    height: 150px;
    // width: 300px;
    background-color: white;
    border-radius: 10px;
    transition: all .5s ease-in-out;
    object-fit: cover;
    overflow: hidden;

    .img-movie {

        width: 100%;
        height: 100%;


    }

    .info {
        display: none;
        padding: 1rem;
    }

    &:hover .flag-container {
        display: block;
    }

    &:hover .stars {
        display: block;
    }

    &:hover {
        cursor: grab;
        transform: scale(1.7);
        z-index: 100;

        .info {
            color: white;
            display: block;
            position: absolute;
            top: 0;

            h3 {
                position: static;
                font-size: 1rem;
                margin-bottom: 20px;
            }

            h4 {
                position: static;
                font-size: 0.7rem;
            }

        }
    }

    &:active {
        cursor: grabbing;
    }

    .flag-container {
        display: none;
        position: absolute;
        top: 10px;
        right: 10px;

        .flags {
            width: 25px;
        }
    }

    .stars {
        color: white;
        display: none;
        position: absolute;

        top: 120px;
        left: 1rem;
        z-index: 10;
    }

}

.swiper {
    padding: 1rem 1rem;
}
</style>