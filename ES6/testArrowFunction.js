// var a =()=>{
//     return 1;
// }
// function a() {
//     return 1;
// }
//如果函数只有一条语句，可以这样写
var fun =()=>Math.random()*100000;
console.log(fun())
//箭头函数不绑定arguments，使用rest参数解决
function A(a){
    console.log(arguments)
}
//报错，arguments未定义
var B=(b)=>{
    console.log(arguments);
}
//...c就是rest参数
var C=(...c)=>{
    console.log(c)
}
A(1,2,3);
//B(2,1,3);
C(3,1,2);
//箭头函数会捕获其所在上下文的 this 值，作为自己的 this 值
var obj = {
    a:10,
    b:function () {
        console.log(this.a)//10
    },
    c:function () {
        return ()=>{
            console.log(this.a);//10
        }
    }
}
obj.b();
obj.c()();