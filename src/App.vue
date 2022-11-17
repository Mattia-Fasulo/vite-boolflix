<template>
    <AppHeader @search="store.callApi()" />
    <main>
        <div class="container">
            <h2>Movies</h2>
        </div>
        <SliderComponent :list="store.movieList" />
        <div class="container">
            <h2>Series</h2>
        </div>
        <SliderComponent :list="store.seriesList" />


    </main>
</template>

<script>
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

    }

}
</script>


<style lang="scss" scoped>
h2 {
    color: white;
    font-size: 2rem;
}
</style>