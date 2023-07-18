<template>
  <div>
    <h2 @click="showName">学校姓名：{{name}}</h2>
    <h2>学生地址：{{address}}</h2>
  </div>
</template>

<script>
//引入一个hunhe
// import {hunhe,hunhe2} from '../mixin'

export default {
    name:'School',
    data() {
        return {
            name:'盐工',
            address:'北极'
        }
    },
    // mixins:[hunhe,hunhe2]
}
</script>

<style>

</style>