<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">上方组件的求和是：{{sum}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {nanoid} from 'nanoid'

export default {
    name:'Person',
    data() {
        return {
            name:''
        }
    },
    computed:{
        // personList(){
        //     return this.$store.state.personList
        // }
        ...mapState(['personList','sum']),
    },
    methods: {
        add(){
            const personObj = {id:nanoid(),name:this.name}
            console.log(personObj);
            this.name=''
            this.$store.commit('ADD_PERSON',personObj)
        }
    },
}
</script>

<style>

</style>