<template>
    <AppHeader @search="store.callApi()" />
    <main>

        <SliderComponent v-if="store.apiQuery" :title="store.title.movies" :list="store.movieList" />

        <SliderComponent v-if="store.apiQuery" :title="store.title.series" :list="store.seriesList" />

        <SliderComponent :title="store.title.popular" :list="store.popularList" />

        <SliderComponent :title="store.title.top" :list="store.topList" />

    </main>
</template>

<script>
import axios from 'axios';
import { store } from './store'
import AppHeader from './components/AppHeader.vue';
import ListComponent from './components/ListComponent.vue'
import SliderComponent from './components/sliderComponent.vue';
export default {
    components: {
        AppHeader,
        ListComponent,
        SliderComponent
    },
    data() {
        return {
            store
        }

    },
    methods: {
        getPopular() {
            console.log('ciao')
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
                        console.log(response.data.results);
                        store.popularList = response.data.results;
                    })
                    .catch((error) => {
                        console.error(error.message);
                        this.errorMessage = error.message;
                    });


            }
        },
        getTop() {
            console.log('ciao')
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
                        console.log(response.data.results);
                        store.topList = response.data.results;
                    })
                    .catch((error) => {
                        console.error(error.message);
                        this.errorMessage = error.message;
                    });


            }
        }
    },
    mounted() {
        this.getPopular(),
            this.getTop()
    }

}
</script>


<style lang="scss" scoped>
h2 {
    color: white;
    font-size: 2rem;
}
</style>