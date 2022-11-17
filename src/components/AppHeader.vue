<template>
    <header>
        <div class="container">

            <div class="logo">
                <h1>Boolflix</h1>
                <ul></ul>
            </div>
            <div class="search-bar">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" @keyup="search" v-model.trim="store.apiQuery">

            </div>
        </div>
    </header>
</template>

<script>
import { store } from '../store'
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    },
    methods: {
        search() {
            this.$emit('search')
        }
    }
}

</script>

<style lang="scss" scoped>
header {
    padding: 1rem;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
            padding-top: 10px;
            text-transform: uppercase;
            font-size: 2.5rem;
            font-weight: 700;
            color: red;
        }
    }
}

.search-bar {
    color: white;

    input {
        width: 100px;
        appearance: none;
        border: none;
        outline: none;
        background: white;
    }

    i {
        font-size: 1rem;
        margin-right: 10px;
    }
}
</style>