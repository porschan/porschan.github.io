<template>
    <div>
        <div>User</div>
        <div class="btn" @click="toAdd">add</div>
    </div>
</template>

<script>
    export default {
        name: "User",
        methods:{
            toAdd(){
                this.$router.push('/add')
            }
        }
    }
</script>

<style scoped>

</style>
