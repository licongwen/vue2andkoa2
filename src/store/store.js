import Vue from  'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{ 
        goods:{
            totalPrice:0,
            totalNum:0,
            goodsData:[
                {
                    id:'1',
                    title:'好吃的苹果',
                    price:8.00,
                    image:'https://www.shangdian.com/static/pingguo.jpg',
                    num:0
                },
                {
                    id:'2',
                    title:'美味的香蕉',
                    price:5.00,
                    image:'https://www.shangdian.com/static/xiangjiao.jpg',
                    num:0
                }
            ]
        }
    },
    getters:{
        totalNum(state){
            let aTotalNum = 0;
            state.goods.goodsData.forEach((value,index,arr)=>{
                aTotalNum += value.num;
            })
            return aTotalNum;
        },
        totalPrice(state){
            let aTotalPrice = 0;
            state.goods.goodsData.forEach((value,index,arr)=>{
                aTotalPrice += value.num*value.price;
            })
            return aTotalPrice.toFixed(2);
        }
    },
    mutations:{
        reselt(state,msg){
            console.log(msg);
            state.goods.totalPrice = this.getters.totalPrice;
            state.goods.totalNum = this.getters.totalNum;
        },
        reduceGoods(state,index){//第一个为默认参数，第二个为页面操作传过来的参数
            state.goods.goodsData[index].num-=1;
            let msg = '我执行了一次';
            this.commit('reselt',msg)
        },
        addGoods(state,index){
            state.goods.goodsData[index].num+=1;
            let msg ='我执行了一次';
            this.commit('reselt',msg);
            /**
                想要重新渲染store中的方法，一律使用commit方法
                你可以这样写commit('reselt',{
                    state:state
                }) 
                也可以这样写commit({
                    type:'reselt',
                    state:state
                })
            **/
        }
    },
    actions:{
        //这里主要是操作异步操作的，使用起来几乎和mutations方法一模一样
        //除了一个是同步操作，一个是异步操作，这里就不多介绍了，
        //有兴趣的可以自己去试一试
        //比如你可以用setTimeout去尝试一下
    }
})