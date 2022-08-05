<script>
    import data from '@/data.json';
   
    export default {
        // data() {
        //     return {
        //         destination: '',
        //     }
        // },  
        // methods: {
        //     getDestination(){
        //         this.destination = data.destinations.find(destination=>destination.id === parseInt(this.$route.params.id))
        //     }
        // },
        // mounted() {
        //     this.getDestination()
        // },
        computed: {
            destinationId(){
                return parseInt(this.$route.params.id)
            },
            destination(){
                return data.destinations.find(destination=>destination.id === this.destinationId)
            }
        }
    }
</script>
<template>
    <section class="destination">
        <h1>{{destination.name}}</h1>
        <div class="destination-details" >
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{destination.description}}</p>
        </div>
    </section> 
</template>

<style>
  @import '@/assets/main.css';
</style>