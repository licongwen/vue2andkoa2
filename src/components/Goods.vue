<template>
    <div id='goods' class="goods-box">
        <ul class="goods-body">
            <li v-for="(item,index) in goods.goodsData" :key="index"> 
                <div class="goods.main">
                    <!-- <img :src="item.image"/> -->
                </div>
                <div class="goods-info">
                    <h3 class="goods-title">{{item.title}}</h3>
                    <p class="good-price">${{item.price}}</p>
                    <div class="goods-compute">
                        <!-- 在dom中使用方法为:$store.commit()加上store.js中的属性名称,示例如下 -->
                        <span class="goods-reduce" @click="$store.commit('reduceGoods',index)">-</span>
                        <input readonly v-model="item.num">
                        <span class="goods-add" @click="$store.commit('addGoods',index)">+</span>
                    </div>
                </div>
            </li>   
        </ul>
        <div class="goods-footer">
            <div class="goods-total">
                合计：${{goods.totalPrice}}
            </div>
            <button class="goods-check">去结账({{ goods.totalNum }})</button>
        </div>
    </div>
</template>
<script>
export default {
    name :'Goods',
    computed:{
        goods(){
            return this.$store.state.goods;
        }
    },
    
}
</script>
<style scoped>
.goods-body{
    list-style: none;
}
</style>


