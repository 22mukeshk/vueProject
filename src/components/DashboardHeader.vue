<template>
    <h1>Header component</h1>
    <button @click="handleClick">click me</button>
</template>

<script>
export default{
    name:"DashboardHeader",

    methods:{
        handleClick(){
           this.$emit('handleClickParent');
        }
    }
}
</script>