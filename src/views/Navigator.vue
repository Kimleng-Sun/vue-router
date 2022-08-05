<script>
    import data from "@/data.json"
    console.log(data.destinations)
    export default{
        data() {
            return {
                destionations: data.destinations
            }
        },
    }
</script>
<template>
    <div id="nav">
        <router-link id="logo" to="/">Traveling</router-link>
        <router-link v-for="destination in destionations" :to="{name: 'Destination', params: {id: destination.id, slug:destination.slug}}" :key="destination.id">
            {{destination.name}}
        </router-link>
    </div>
</template>
<style>
    .active-link{
        border-bottom: 3px solid white;
    }
</style>