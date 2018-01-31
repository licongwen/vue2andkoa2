<template>
    <div>
        <p>{{title}}</p>
        <p>{{name}}</p>
        <ul v-for="(item,index) in dataContent" :key='index'> 
            <li>Name:{{item.name}},Age:{{item.age}}</li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            title:'Welcome Home',
            name:'',
            url:'http://127.0.0.1:3001/content',
            dataContent:[]
        }
    },
    created(){
        this.name = localStorage.getItem('name');
        this.token = localStorage.getItem('token');
        console.log(this.token);
        console.log('++++++++++++++++++++++++++++');
        this.getData();
    },
    methods:{
        getData(){
            axios.get(this.url,{
                headers:{
                    'token':this.token 
                }
            }).then((response)=>{
                console.log(response.data);
                this.dataContent = response.data;
            })
        }
    }
}
</script>

