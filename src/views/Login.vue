<script>
    export default{
        data() {
            return {
                username:'',
                password: '',
            }
        },
        methods: {
            login(){
                window.user = this.username;
                //When Submit go navigate to Protected page
                this.$router.push({name: 'Protected' })
            }
        },
    }
</script>
<template>
    <div class="login">
        <form class="form" @submit.prevent="login">
            <h1>Login</h1>

            <label for="username">Username</label>
            <input type="text" v-model="username" name="username" class="input"/>

            <label for="password">Password</label>
            <input type="password" v-model="password" name="password" class="input"/>

            <button class="btn">Login</button>
        </form>
    </div>
</template>