export default {
    install(Vue){
        //全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })


        //定义全局指令
        Vue.directive('fbind',{
            //指令与元素成功绑定时（一上来）
            bind(element,pinding){
                console.log(this);  //注意此处的this是window
                element.value = pinding.value
            },
            //指令所在元素被插入页面时
            inserted(element,pinding){
                element.focus()
            },
            //指令所在的模板被重新解析时
            update(element,pinding){
                element.value = pinding.value
                // element.focus()
            }
        })

    //定义混入
        Vue.mixin({
            data(){
                return {
                    x:100,
                    y:200
                }
            }
        })

        //给vue原型上添加一个方法（vm和vc就都能用了）
        Vue.prototype.hello = ()=>{alert('你好啊')}
    }
}