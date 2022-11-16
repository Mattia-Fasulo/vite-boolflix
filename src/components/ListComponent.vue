<template>
    <section>
        <div class="container">
            <CardComponent />
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
    data() {
        return {
            store
        }

    }
}
</script>

<style lang="scss" scoped>
.container {
    padding: 1rem;
    background-color: gray;
    height: max-content;
}
</style>