<template>
  <div class="demo">
    <h2>学校姓名：{{name}}</h2>
    <h2>学生地址：{{address}}</h2>
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
}
</script>

<style scoped>
  .demo{
    background-color: skyblue;
  }
</style>