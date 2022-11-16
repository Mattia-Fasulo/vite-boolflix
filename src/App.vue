<template>
    <AppHeader @search="store.callApi()" />
    <main>
        <div class="container">
            <h2>Movies</h2>
        </div>
        <ListComponent :list="store.movieList" />
        <div class="container">
            <h2>Series</h2>
        </div>
        <ListComponent :list="store.seriesList" />
    </main>
</template>

<script>
import { store } from './store'
import AppHeader from './components/AppHeader.vue';
import ListComponent from './components/ListComponent.vue'
export default {
    components: {
        AppHeader,
        ListComponent
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
    font-size: 3rem;
}
</style>