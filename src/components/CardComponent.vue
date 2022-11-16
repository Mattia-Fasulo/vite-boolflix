<template>
    <div class="card">
        <h2 v-if="obj.title">{{ obj.title }}</h2>
        <h2 v-else>{{ obj.name }}</h2>
        <h3 v-if="obj.original_title">{{ obj.original_title }}</h3>
        <h3 v-else>{{ obj.original_name }}</h3>
        <div>{{ obj.original_language }}</div>
        <div>{{ obj.vote_average }}</div>

    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        obj: Object
    }
}
</script>

<style lang="scss" scoped>
.card {
    padding-top: 1rem;
    width: 300px;
    height: 150px;
    background-color: white;
    border: 1px solid black;
    text-align: center;

    h2 {
        overflow: hidden;
        font-size: 1.8rem;
        height: 40px;
    }

    h3 {
        overflow: hidden;
        font-size: 1.2rem;
        height: 30px;

    }

}
</style>