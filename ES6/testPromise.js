/*
//promise对象，用来操作异步传递过来的数据
//pending（等待，处理中），resolve（完成，fullfilled）reject（拒绝，失败）
var p1 = new Promise(function (resolve,reject) {
    resolve(1)//成功了返回一个promise对象1
});

//接收成功和失败的数据，通过then来传递
//then也是一个promise对象，会继续往下传递数据，传递给下一个then
p1.then(function (value) {
    //resolve
    console.log(value);
    return value+1;
    alert(`成功了:${value}`);
},function (value) {
    alert(`失败了${value}`);
    }).then(function (value) {
    console.log(value)
})*/
//catch捕获异常
/*
var p1 = new Promise(function (resolve, reject) {
    resolve('success!')
});
p1.then(function (value) {
    console.log(value);
    throw 'something wrong...'
}).catch(function (e) {
    console.log(e)
})*/

//all 全部，用于将多个promise对象组合
//promise.all([p1,p2,p3,...])所有的promise对象都正确才正确，只要有一个错误就全部错误
/*var p1 = Promise.resolve('success');
var p2 = Promise.reject('fail');
Promise.all([true,p1,p2]).then(function (obj) {
    console.log(`success:${obj}`);
},function (obj) {
    console.log(`fail:${obj}`)
});*/

//  race 返回最先执行的promise结果
var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve,50,'fast!');
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve,100,'slowly')
});
Promise.race([p1,p2]).then(function (value) {
    console.log(value);
})
