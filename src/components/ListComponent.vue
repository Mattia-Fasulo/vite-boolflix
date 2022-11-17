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
        CardComponent
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
.container {
    padding: 1rem;
    background-color: gray;
    height: 28vh;
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