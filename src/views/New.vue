<script>
export default{
    props:{
        msg: ''
    }
}
</script>
<template>
    {{msg}}
    <slot>dfs</slot>
    <div>What</div>
    <slot></slot>
</template>