<template>
    <section>
        <div class="container">
            <h2>{{ title + ' search result for: ' + store.apiQuery }}</h2>
            <div class="my-row">
                <CardComponent :obj="item" v-for="(item, index) in list" :key="item.id" />

            </div>


        </div>


    </section>
</template>

<script>
import { store } from '../store'
import CardComponent from './CardComponent.vue';


export default {
    name: "ListComponent",
    components: {
        CardComponent,

    },
    props: {
        list: "",
        title: ""
    },
    data() {
        return {
            store,

        }

    },


}
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.not-found {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.swiper-slide {
    background-color: white;
    color: white;
    height: 200px;
}

.container {
    padding: 0.5rem;
    background-color: $bg-main;
    min-height: 30vh;
    height: max-content;



    h2 {
        color: white;
    }


    .my-row {
        margin: 0 auto;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        margin-left: 35px;
        gap: 14px;


    }

    @media (max-width: 1400px) {
        .my-row {
            justify-content: center;
        }
    }

}
</style>