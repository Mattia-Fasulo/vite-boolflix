<template>
    <AppHeader />
    <main>
        <ListComponent />
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

</style>