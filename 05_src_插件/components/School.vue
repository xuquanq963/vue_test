<template>
  <div>
    <h2>学校姓名：{{name | mySlice}}</h2>
    <h2>学生地址：{{address}}</h2>
    <button @click="test">点我测试一下hello方法</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'盐工atguigu',
            address:'北极'
        }
    },
    methods: {
      test(){
        this.hello()
      }
    },
}
</script>

<style>

</style>