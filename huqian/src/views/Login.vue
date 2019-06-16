<template>
    <div>
        <form v-if="!isReg">
            <p>用户名：</p>
            <input type="text" v-model="name">
            <p>密码：</p>
            <input type="password" v-model="password">
            <button type="button" @click="login()">登录</button>
            <button type="button" @click="reg()">注册</button>
        </form>
        <form v-else>
            <p>用户名：</p>
            <input type="text" v-model="name">
            <p>密码：</p>
            <input type="password" v-model="password">
            <p>再次输入密码：</p>
            <input type="password" v-model="repeat">
            <button type="button" @click="add()">确定</button>
            <button type="button" @click="cancel()">取消</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                isReg:false,
                name:'',
                password:'',
                repeat:'',
            }
        },
        methods:{
            login(){
                if(localStorage.getItem('name') === this.name && localStorage.getItem('password') === this.password ){
                    this.name=''
                    this.password=''
                    this.$router.push('/home/list');
                }else{
                    alert('账号密码不一致')
                }
            },
            reg(){
                this.isReg = true
            },
            add(){
                if(this.password === this.repeat){
                    localStorage.setItem("name",this.name)
                    localStorage.setItem("password",this.password)
                    this.name=''
                    this.password=''
                    this.isReg=false
                }else{
                    alert('两次密码不一致')
                }
            },
            cancel(){
                this.isReg = false
            }
        }
    }
</script>

<style scoped>

</style>
