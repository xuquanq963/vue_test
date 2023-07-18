<template>
  <div>
    <Student name="张三" sex="男" :age="18"/>
    <Student/>
  </div>
</template>

<script>
//引入Student组件
import Student from './components/Student'
export default {
    name:'App',
    components:{Student},
}
</script>

<style>

</style>