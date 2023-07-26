<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    //通过路由规则，进入该组件时被调用
    beforeRouteEnter (to, from, next){
      console.log('About--beforeRouteEnter',to,from)
      console.log(to.meta.isAuth); 
        //判断是否需要鉴权
        if(to.meta.isAuth){  
            if(localStorage.getItem('school')==='atguigu0'){
                next()
            }else{
                alert('抱歉，您无权查看')
            }
        }else{
            next()
        }
  },

    //通过路由规则，离开该组件时被调用
    beforeRouteLeave (to, from, next){
      console.log('About--beforeRouteLeave',to,from)
      next()
    }
}
</script>

<style>

</style>