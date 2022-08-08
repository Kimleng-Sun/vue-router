<script>
    import data from '@/data.json';
    import ExperienceCard from '@/components/ExpereincedCard.vue'
    import GoBack from '@/components/goBack.vue'
   
    export default {
        data() {
            return {
                destination: '',
            }
        },  
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
            // destinations(){
            //     return data.destinations.find(destination=>destination.id === this.destinationId)
            // }
        },
        methods: {
            async fetchData(){
            this.destination=''
            const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
            this.destination = await response.json()
         
            }
        },

        created(){
           this.fetchData()
        },
        watch: {
            destinationId(){
                this.fetchData()
            }
        },

        components: {
            ExperienceCard,
            GoBack,
        }
    }
</script>
<template>
    <div>
    <section v-if="destination" class="destination">
        <GoBack />
        <h1>{{destination.name}}</h1>
        <div class="destination-details" >
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{destination.description}}</p>
        </div>
    </section>
    <p v-else>Loading.....</p>
    <section class="experiences">
        <h2>Top experienced in {{destination.name}}</h2>
    <div class="cards">
        <router-link v-for="experience in destination.experiences" :key="destination.slug"
            :to="{name: 'Experience'  , params: {experienceSlug: experience.slug}}"
        >
            <ExperienceCard :experience="experience"/>
        </router-link>
        
    </div>
    <router-view />
    </section>
    </div>
</template>

<style>
  @import '@/assets/main.css';
</style>