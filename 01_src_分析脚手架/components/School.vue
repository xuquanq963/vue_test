<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showX">点我显示X</button>
    </div>   
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default {
        name:'School',
        data(){
            return {
                name:'尚硅谷',
                address:'北京'
            }
        },
        methods:{
            showX(){
                console.log(this.x);
            }
        }, 
    }
    
</script>
    
<style>
/* 组件的样式 */
    .demo{
        background-color: green;
    }
</style>