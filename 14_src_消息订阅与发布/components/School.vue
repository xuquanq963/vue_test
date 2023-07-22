<template>
  <div class="school">
    <h2>学校姓名：{{name}}</h2>
    <h2>学生地址：{{address}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data() {
        return {
            name:'盐工',
            address:'北极'
        }
    },
    methods:{
      demo(msgName,data){
        console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data);
      }
    },
    mounted() {
      // console.log('School',this.x);
      // this.$bus.$on('hello',(data)=>{
      //   console.log('我是School组件，收到了数据',data);
      // })
      this.pubId = pubsub.subscribe('hello',this.demo)
    },
    beforeDestroy(){
    //   this.$bus.$off("hello")
      pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style scoped>
  .school{
    background-color: skyblue;
    padding: 5px;
  }
</style>