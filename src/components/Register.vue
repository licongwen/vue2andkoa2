<template>
    <div class="register">
        <div class="registerTitle">
            <p>{{info}}</p>
        </div>
        <div class="registerBody">
            <el-input placeholder="请输入内容" v-model="id">
                <template slot="prepend">用户名</template>
            </el-input>
            <el-input placeholder="请输入内容" v-model="name">
                <template slot="prepend">昵称</template>
            </el-input>
            <el-input placeholder="请输入内容" v-model="password" type="password">
                <template slot="prepend">密码</template>
            </el-input>
            <el-input placeholder="请输入内容" v-model="conformPassword" type="password">
                <template slot="prepend">确认密码</template>
            </el-input>
            <p class="errorM" v-show="showError">两次输入的密码不一致</p>
            <el-input placeholder="请输入内容" v-model="email" type="email">
                <template slot="prepend">Email</template>
            </el-input>
        </div>
        <div class="registerBtn">
            <el-button class="btn1" @click="sub">Submit</el-button>
            <el-button class="btn2" @click="reset">ReSet</el-button>
        </div>
    </div>
</template>
<script>
 import axios from 'axios'
export default {
    data(){
        return {
            info:'This is Register Page',
            id:'',
            name:'',
            password:'',
            conformPassword:'',
            email:'',
            token:'',
            showError:false
        }
    },
    created(){

    },
    watch:{
        conformPassword(val,oldVal){
            if(this.password!==val){
                this.showError = true;
            }else{
                this.showError = false;
            }
        }
    },
    methods:{
        sub(){
            if(this.id!==''&&this.name!==''&&this.password!==''&&this.email!==''&&this.showError===false){
                axios.post('http://127.0.0.1:3001/register',{
                    'id':this.id,
                    'name':this.name,
                    'password':this.password,
                    'email':this.email
                })
                .then((response)=>{
                    console.log(response.data);
                    this.$alert(response.data, '注册提示', {
                        confirmButtonText: '确定'
                    });
                    this.id='';
                    this.name='';
                    this.password='';
                    this.email='';
                })
            }else{
                this.$alert('请输入完整的内容', '注册提示', {
                    confirmButtonText: '确定'
                });
            }
        },
        reset(){
            this.id='';
            this.name='';
            this.password='';
            this.email='';
        }
    }
}
</script>
<style scoped>
.register{
    width: 100%;
    display:flex;
    flex-direction: column;
}
.registerBody{
    width: 90%;
    margin: 1rem auto;
}
.registerBody .el-input{
    margin-top: 1rem;
}
.registerBtn{
    width:90%;
    margin: 1rem auto;
}
.btn1{
    float: left;
}
.btn2{
    float: right;
}
.errorM{
    color:red;
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 12px;
    text-align: left;
}
</style>

