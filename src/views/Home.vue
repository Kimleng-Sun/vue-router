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
    <div class="home">
        <h2>Home</h2>
        <div class="destinations" >
            <router-link v-for="destination in destionations" :to="{name: 'Destination', params: {id: destination.id, slug: destination.slug}}" :key="destination.id">
                <img :src="`/images/${destination.image}`" :alt="destination.name"/>
            </router-link>
        </div>
    </div>
</template>