<script>
    import Navigator from '@/views/Navigator.vue'
    export default{
        components: {
            Navigator
        }
    }
</script>
<template>
    <Navigator />
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/greeting">Greeting</router-link> -->
    <div class="container">
        <router-view></router-view>
    </div>
   
</template>