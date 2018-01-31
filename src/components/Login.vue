<template>
    <div class="login">
        <div class="loginTitle">
            <p>Plaese Login</p>
        </div>
        <div class="loginContent">
            <el-input class="inp" placeholder="ID" prefix-icon="el-icon-edit-outline" v-model='id'></el-input>
            <el-input class="inp" type="password" placeholder="Password" prefix-icon="el-icon-message" v-model='password'></el-input>
            <el-button type='primary' class="btnL" @click="login" :loading='isload'>Login</el-button>
            <el-button type='primary' class="btnL" @click="register">Register</el-button>
        </div>
         <p class="error" v-show='showError'>{{errorMessage}}</p>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return {
            info:'hello koa2',
            id:'',
            password:'',
            isload:false,
            url:'http://127.0.0.1:3001/login',
            showError:false,
            errorMessage:'plaese input right id or password',
            data:{}
        }
    },
    watch:{
        id:function(val){
            this.showError = false;
        },
        password:function(val){
            this.showError = false;
        }
    },
    methods:{
        login(){ 
            this.isload =true;
            if(this.id !=='' && this.password!==''){
                axios.post(this.url,{
                    id:this.id,
                    password:this.password
                }).then((response)=>{
                    console.log(response.data);
                    this.data = response.data;
                    localStorage.setItem('token',this.data.token);
                    localStorage.setItem('name',this.data.name);
                    this.isload = false;
                    this.$router.push({
                        path:'/home'
                    })
                }).catch((err)=>{
                    this.isload = false;
                })
            }else{
                this.showError = true;
                this.isload = false;
            }  
        },
        register(){
            this.$router.push({path:'/register'});
        }
    }
}
</script>
<style scoped>
    .login{
        display: flex;
        flex-direction: column;
    }
    .loginTitle{
        width: 80%;
        margin: 1rem auto;
        text-align: center;
    }
    .loginContent{
        width: 80%;
        margin: 1rem auto 0rem;
    }
    .loginContent .inp{
        margin: 1rem 0;
    }
    .loginContent .btnL{
        width: 100%;
        margin: 1rem 0;
    }
    .error{
        color: red;
        width: 80%;
        margin: 0 auto;
        text-align: left;
        font-size: 12px;
        padding: 0;
    }
</style>
