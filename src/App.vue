<template>

    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/brazil">Brazil</router-link>
        <router-link to="/jamaica">Jamaica</router-link>
        <router-link to="/hawaii">Hawaii</router-link>
        <router-link to="/panama">Panama</router-link>
        <router-link to="/about">About</router-link>
    </div>
    
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/greeting">Greeting</router-link> -->
    <div class="container">
        <router-view></router-view>
    </div>
   
</template>