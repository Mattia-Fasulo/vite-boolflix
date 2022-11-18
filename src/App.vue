<template>
    <AppHeader @search="store.callApi()" />
    <main>

        <ListComponent v-if="store.apiQuery && store.select == 'movies'" :title="store.title.movies"
            :list="store.movieList" />

        <ListComponent v-if="store.apiQuery && store.select == 'series'" :title="store.title.series"
            :list="store.seriesList" />

        <!-- <SliderComponent v-if="store.apiQuery" :title="store.title.movies" :list="store.movieList" />

        <SliderComponent v-if="store.apiQuery" :title="store.title.series" :list="store.seriesList" /> -->

        <SliderComponent :title="store.title.moviesPopular" :list="store.popularList" />

        <SliderComponent :title="store.title.seriesPopular" :list="store.popularListSeries" />

        <SliderComponent :title="store.title.moviesTop" :list="store.topList" />

        <SliderComponent :title="store.title.seriesTop" :list="store.topListSeries" />

        <InfoComponent v-if="store.dateInfo" />

    </main>
</template>

<script>
import axios from 'axios';
import { store } from './store'
import AppHeader from './components/AppHeader.vue';
import ListComponent from './components/ListComponent.vue'
import SliderComponent from './components/sliderComponent.vue';
import InfoComponent from './components/infoComponent.vue';
export default {
    components: {
        AppHeader,
        ListComponent,
        SliderComponent,
        InfoComponent
    },
    data() {
        return {
            store
        }

    },
    methods: {
        getPopular() {
            {
                const configPopular = {
                    method: 'get',
                    url: store.apiUrlPopular,
                    params: {
                        api_key: store.apiKey,
                        original_language: store.language

                    }
                };


                axios(configPopular)
                    .then((response) => {
                        store.popularList = response.data.results;

                    })
                    .catch((error) => {
                        console.error(error.message);
                        this.errorMessage = error.message;
                    });




            }
        },
        getTop() {

            {
                const configTop = {
                    method: 'get',
                    url: store.apiUrlTop,
                    params: {
                        api_key: store.apiKey,
                        original_language: store.language

                    }
                };




                axios(configTop)
                    .then((response) => {
                        store.topList = response.data.results;
                    })
                    .catch((error) => {
                        console.error(error.message);
                        this.errorMessage = error.message;
                    });


            }
        },
        getPopularSeries() {
            {
                const configPopularSeries = {
                    method: 'get',
                    url: store.apiUrlPopularSeries,
                    params: {
                        api_key: store.apiKey,
                        original_language: store.language

                    }
                };


                axios(configPopularSeries)
                    .then((response) => {
                        store.popularListSeries = response.data.results;

                    })
                    .catch((error) => {
                        console.error(error.message);
                        this.errorMessage = error.message;
                    });




            }
        },
        getTopSeries() {

            {
                const configTopSeries = {
                    method: 'get',
                    url: store.apiUrlTopSeries,
                    params: {
                        api_key: store.apiKey,
                        original_language: store.language

                    }
                };




                axios(configTopSeries)
                    .then((response) => {
                        store.topListSeries = response.data.results;
                    })
                    .catch((error) => {
                        console.error(error.message);
                        this.errorMessage = error.message;
                    });


            }
        }
    },
    mounted() {
        this.getPopular();
        this.getTop();
        this.getPopularSeries();
        this.getTopSeries();
    }

}
</script>


<style lang="scss" scoped>
h2 {
    color: white;
    font-size: 2rem;
}
</style>