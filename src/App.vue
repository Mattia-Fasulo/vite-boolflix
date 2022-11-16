<template>
    <AppHeader />
    <main>


    </main>
</template>

<script>
import { store } from './store'
import AppHeader from './components/AppHeader.vue';
export default {
    components: {
        AppHeader
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