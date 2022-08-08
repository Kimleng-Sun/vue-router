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
        <router-view v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component" :key="$route.path"/>
            </transition>
        </router-view>
    </div>
   
</template>
<style>
    /* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>