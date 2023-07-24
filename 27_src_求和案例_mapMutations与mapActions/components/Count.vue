<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h1>当前求和放大10倍为：{{bigSum}}</h1>
    <h3>我在{{school}}，学习{{subject}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
    nmae:'Count',
    data() {
      return {
        n:1   //用户选择的数字
      }
    },
    computed:{
      //借助mapState读取数据，从state中读取数据。（对象写法）
      // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

      //借助mapState读取数据，从state中读取数据。（数组写法）
      ...mapState(['sum','school','subject']),
// **************************************************************

      //借助mapGetters读取数据，从getters中读取数据。（对象写法）
      // ...mapGetters({bigSum:'bigSum',}),

      //借助mapGetters读取数据，从getters中读取数据。（数组写法）
      ...mapGetters(['bigSum']),
    },
    methods: {
      // 程序员亲自写方法
      // increment(){
      //   this.$store.commit("JIA",this.n)
      // },
      // decrement(){
      //   this.$store.commit("JIAN",this.n)
      // },

      // 借助mapMutations生成对应的方法，方法中调用commit去练习mulations（对象写法）
      ...mapMutations({increment:'JIA',decrement:'JIAN'}),
      // 借助mapMutations生成对应的方法，方法中调用commit去练习mulations（数组写法）
      // ...mapMutations(['JIA','JIAN']),

      // *****************************************
      // 程序员亲自写方法
      // incrementOdd(){
      //     this.$store.dispatch("jiaOdd",this.n)
      // },
      // incrementWait(){
      //     this.$store.dispatch("jiaWait",this.n)
      // },

      // 借助mapActions生成对应的方法，方法中调用dispatch去练习actions（对象写法）
      ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
      // 借助mapActions生成对应的方法，方法中调用dispatch去练习actions（数组写法）
      // ...mapActions(['jiaOdd','jiaWait']),
    },
    mounted() {
      const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
      // console.log(x);
    },
}
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>