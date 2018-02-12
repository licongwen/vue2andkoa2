<template>
    <div class="login">
        <el-menu class="title" mode="horizontal" :default-active="activeIndex" @select="handleSelect">
            <el-menu-item index="1">登陆/注册</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">订单管理</el-menu-item>
        </el-menu>
        <div class="loginContent" v-if="activeIndex==='1'">
            <el-input class="inp" placeholder="ID" prefix-icon="el-icon-edit-outline" v-model='id'></el-input>
            <el-input class="inp" type="password" placeholder="Password" prefix-icon="el-icon-message" v-model='password'></el-input>
            <el-button type='primary' class="btnL" @click="login" :loading='isload'>Login</el-button>
            <el-button type='primary' class="btnL" @click="register">Register</el-button>
            <p class="error" v-show='showError'>{{errorMessage}}</p>
        </div>
        <div v-if="activeIndex==='2-1'">
            <p>page two-one</p>
        </div>
        <div v-if="activeIndex==='2-2'">
            <p>page two-two</p>
        </div>
        <div v-if="activeIndex==='2-3'">
            <p>page two-three</p>
        </div>
        <div v-if="activeIndex==='3'">
            <p>page three</p>
        </div>
         
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
            data:{},
            activeIndex:'1',
            activeIndex2:'1'
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
        handleSelect(key,keypath){
            console.log(key);
            console.log(keypath);
            this.activeIndex = key;
        },
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
                    this.showError = true;
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
    .title{
        width: 100%;
    }
    .login{
        display: block;
        background:#f7f7f7;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    .loginContent{
        width: 30%;
        margin: 4rem auto;
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
