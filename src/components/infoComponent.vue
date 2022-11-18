<template>
    <div class="info-container">
        <div class="esc">
            <i @click="closeInfo" class="fa-solid fa-xmark"></i>
        </div>
        <!-- img -->
        <div class="img-info">
            <img class="img-movie"
                :src="store.dateInfo.poster_path ? store.apiUrlImg + store.sizeImg + store.dateInfo.poster_path : store.placeHolder"
                :alt="store.dateInfo.title">
        </div>
        <!-- flags -->
        <div class="flag-container" v-if="(this.flagsAvaiable.includes(store.dateInfo.original_language))">
            <img class="flags" :src="'/img/' + store.dateInfo.original_language + '.png'"
                :alt="store.dateInfo.original_language + 'flag'">
        </div>
        <!-- stars -->
        <div class="stars">
            <span v-for="n in 5" class="fa-star"
                :class="(n <= Math.ceil(store.dateInfo.vote_average / 2)) ? 'fa-solid' : 'fa-regular'">
            </span>
        </div>
        <div class="info">
            <h1 v-if="store.dateInfo.title"><span>Title : </span>{{ store.dateInfo.title }}</h1>
            <h1 v-else><span>Title : </span>{{ store.dateInfo.name }}</h1>
            <h2 v-if="store.dateInfo.original_title"><span>Original title : </span> {{ store.dateInfo.original_title }}
            </h2>
            <h2 v-else><span>Original title : </span>{{ store.dateInfo.original_name }}</h2>
            <h2><span>Overview :</span></h2>
            <p>{{ store.dateInfo.overview }}</p>

        </div>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    name: 'infoComponent',
    data() {
        return {
            store,
            flagsAvaiable: ['de', 'en', 'es', 'fr', 'it', 'ja', 'us'],
        }
    },
    methods: {
        closeInfo() {
            store.dateInfo = null;
        }
    },
}
</script>

<style lang="scss" scoped>
.info-container {
    display: flex;
    flex-flow: column;
    align-items: center;
    position: relative;
    color: white;
    width: 40vw;
    height: 90vh;
    position: fixed;
    z-index: 1000;
    top: 50px;
    left: 30vw;
    background-color: rgb(81, 81, 81);
    border-radius: 10px;
    overflow: hidden;

    .info {
        padding: 1rem;
        width: 100%;

        h1 {
            font-size: 1.8rem;
        }

        h2 {
            font-size: 1.3rem;
        }

        h3 {
            font-size: 1rem;
        }

        p {
            font-size: 0.8rem;
        }

        span {
            color: rgb(0, 0, 0);
            font-weight: 700;
        }
    }

    .esc {
        font-size: 1.5rem;
        position: absolute;
        right: 20px;
        top: 10px;
        cursor: pointer;
    }

    .img-info {
        width: 100%;
        height: 60%;
        object-fit: cover;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .flag-container {

        position: absolute;
        top: 10px;
        left: 15px;
        z-index: 100;

        .flags {
            width: 20px;
        }
    }

    .stars {
        color: white;
        font-size: 1rem;
        position: absolute;

        bottom: 1rem;
        left: 1rem;
        z-index: 10;
    }
}
</style>