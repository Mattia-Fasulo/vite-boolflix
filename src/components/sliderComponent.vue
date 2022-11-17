<template>
    <div class="container">
        <h2>{{ title }}</h2>
        <swiper :breakpoints="swiperOptions.breakpoints" :space-between="10" @swiper="onSwiper"
            @slideChange="onSlideChange">
            <swiper-slide v-for="(item, index) in list" :key="item.id">

                <!-- image -->
                <img class="img-movie"
                    :src="item.poster_path ? store.apiUrlImg + store.sizeImg + item.poster_path : store.placeHolder"
                    :alt="item.title">
                <!-- flag -->
                <div class="flag-container" v-if="(this.flagsAvaiable.includes(item.original_language))">
                    <img class="flags" :src="'/img/' + item.original_language + '.png'"
                        alt="item.original_language +'flag'">
                </div>
                <div class="flags" v-else>{{ item.original_language }}</div>
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


                    <div class="overview">{{ item.overview }}</div>
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
        list: '',
        title: ''
    },
    components: {
        Swiper,
        SwiperSlide,

    },
    data() {
        return {
            store,
            flagsAvaiable: ['de', 'en', 'es', 'fr', 'it', 'ja', 'us'],
            swiperOptions: {
                breakpoints: {
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    400: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    600: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    },

                    800: {
                        slidesPerView: 5,
                        spaceBetween: 10
                    },

                    1000: {
                        slidesPerView: 6,
                        spaceBetween: 10
                    }

                }
            }

        }
    },
    setup() {
        const onSwiper = (swiper) => {
            // console.log(swiper);
        };
        const onSlideChange = () => {
            // console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,

        };
    },
};
</script>

<style lang="scss" scoped>
h2 {
    color: white;
}

.swiper {
    overflow: visible;


}

.swiper-slide {

    position: relative;
    height: 150px;
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
        background-color: rgba(0, 0, 0, 0.408);
        width: 100%;
        height: 100%;
        display: none;
        padding: 1rem;

        .overview {
            overflow-y: hidden;
            height: 35px;
            font-size: 0.5rem;
        }
    }


    &:hover {
        cursor: grab;
        top: 10;
        transform: scale(1.9);
        z-index: 1200;


        .info {

            color: white;
            display: block;
            position: absolute;
            top: 0;

            h3 {
                position: static;
                font-size: 1rem;

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


    &:hover .flag-container {
        display: block;
    }

    &:hover .stars {
        display: block;
    }


    .flag-container {
        display: none;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 100;

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



    @media (max-width: 400px) {
        .swiper-slide:hover {
            transform: scale(1.2) !important;
        }
    }

}

.swiper {

    padding: 1rem 1rem;
}
</style>