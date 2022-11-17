<template>
    <section>
        <div class="container">
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
        list: ""
    },
    data() {
        return {
            store,

        }

    },


}
</script>

<style lang="scss" scoped>
.swiper-slide {
    background-color: white;
    color: white;
    height: 200px;
}

.container {
    padding: 0.5rem;
    background-color: gray;
    min-height: 30vh;
    height: max-content;
    overflow: hidden;
    overflow-x: scroll;

    .my-row {
        padding: 1rem;
        display: flex;
        width: max-content;
        gap: 15px;
    }
}
</style>