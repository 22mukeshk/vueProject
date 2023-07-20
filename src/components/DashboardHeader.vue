<template>
    <h1>Header component</h1>
    <button @click="handleClick">click me</button>
</template>

<script>
import {getCommitHistory} from '@/services/gitInfo';

export default{
    name:"DashboardHeader",

    methods:{
        handleClick(){
           this.$emit('handleClickParent');
        }
    },
    created(){
     let gitMessage = getCommitHistory();
     console.log("gitMessage",gitMessage);
        
    }
}
</script>