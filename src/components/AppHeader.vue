<template>
    <header>
        <div class="container">

            <div class="logo">
                <h1>Boolflix</h1>
            </div>
            <div class="search-bar">
                <input type="text">
                <button type="button">Search</button>
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
            store
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
        h1 {
            color: red;
        }
    }
}
</style>