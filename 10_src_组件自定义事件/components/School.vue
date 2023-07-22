<template>
  <div class="school">
    <h2>学校姓名：{{name}}</h2>
    <h2>学生地址：{{address}}</h2>
    <button @click="sendSchoolName">把学校名给app</button>
  </div>
</template>

<script>
export default {
    name:'School',
    props:['getSchoolName'],
    data() {
        return {
            name:'盐工',
            address:'北极'
        }
    },
    methods:{
      sendSchoolName(){
        this.getSchoolName(this.name)
      }
    }
}
</script>

<style scoped>
  .school{
    background-color: skyblue;
    padding: 5px;
  }
</style>