<script>
    import data from "@/data.json"

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
        <router-link class="not-active" id="logo" to="/">Traveling</router-link>
        <router-link v-for="destination in destionations" :to="{name: 'Destination', params: {id: destination.id, slug:destination.slug}}" :key="destination.id">
            {{destination.name}}
        </router-link>
        <router-link :to="{name: 'Protected'}">Dashboard</router-link>
    </div>
</template>
<style>
    .active-link{
        border-bottom: 3px solid white;
    }
    .not-active{
        border: none !important;
    }
</style>