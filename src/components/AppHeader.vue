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
                <select name="type" v-model="store.select">
                    <option selected value="">Search in...</option>
                    <option value="movies">Movies</option>
                    <option value="series">Series</option>
                </select>


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
    padding-left: 0;
    padding-right: 0;
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
    display: flex;
    align-items: center;

    input {
        height: 25px;
        width: 150px;
        appearance: none;
        border: none;
        outline: none;
        background: white;
        margin-left: 15px;
        border-radius: 5px;
    }

    i {
        font-size: 1.2rem;
        margin-left: 10px;
    }

    select {
        margin-left: 15px;
        border: none;
        width: 150px;
        height: 25px;
        border-radius: 5px;
    }
}
</style>