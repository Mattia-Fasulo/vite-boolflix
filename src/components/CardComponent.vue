<template>
    <div class="card">
        <!-- img -->
        <img class="img-movie"
            :src="obj.poster_path ? store.apiUrlImg + store.sizeImg + obj.poster_path : store.placeHolder"
            :alt="obj.title">
        <!-- flag -->
        <div class="flag-container" v-if="(this.flagsAvaiable.includes(obj.original_language))">
            <img class="flags" :src="'/img/' + obj.original_language + '.png'" :alt="obj.original_language + 'flag'">
        </div>
        <div class="flags" v-else>{{ obj.original_language }}</div>
        <!-- star -->
        <div class="stars">
            <span v-for="n in 5" class="fa-star"
                :class="(n <= Math.ceil(obj.vote_average / 2)) ? 'fa-solid' : 'fa-regular'">
            </span>
        </div>
        <div class="btn-info">
            <span @click="showInfo" class="fa-solid fa-circle-info"></span>
        </div>

        <div class="info">


            <!-- title -->
            <h3 v-if="obj.title">{{ obj.title }}</h3>
            <h3 v-else>{{ obj.name }}</h3>
            <!-- original title -->
            <h4 v-if="obj.original_title">{{ obj.original_title }}</h4>
            <h4 v-else>{{ obj.original_name }}</h4>


            <div class="overview">{{ obj.overview }}</div>

        </div>

    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'CardComponent',
    props: {
        obj: Object
    },
    data() {
        return {
            store,
            flagsAvaiable: ['de', 'en', 'es', 'fr', 'it', 'ja', 'us'],

        }
    },
    methods: {
        showInfo() {
            store.dateInfo = this.obj;

        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    overflow: hidden;
    width: 200px;
    height: 150px;
    background-color: black;

    transition: all .5s ease-in-out;
    object-fit: cover;

    .img-movie {
        width: 100%;
        height: 100%;
    }

    .info {
        color: white;
        background-color: rgba(0, 0, 0, 0.408);
        position: absolute;
        top: 0;

        width: 100%;
        height: 100%;
        display: none;
        padding: 1rem;

        h3 {
            position: static;
            font-size: 1rem;

        }

        h4 {
            position: static;
            font-size: 0.7rem;
        }



        .overview {
            overflow-y: hidden;
            height: 35px;
            font-size: 0.5rem;
        }
    }

    &:hover {
        transform: scale(1.9);
        z-index: 100;


        .info {
            display: block;
        }

        .flag-container {
            display: block;
        }

        .stars {
            display: block;
        }

        .btn-info {
            display: block;
        }

    }

    .flag-container {
        display: none;
        position: absolute;
        top: 0;
        right: 5px;
        z-index: 100;

        .flags {
            width: 20px;
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

    .btn-info {
        color: white;
        cursor: pointer;
        position: absolute;
        display: none;
        top: 120px;
        right: 1rem;
        z-index: 10;
    }

}
</style>