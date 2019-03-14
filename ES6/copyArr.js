//数组的浅拷贝，引用之间的拷贝
var arr1 = [1,2,3];
var arr2 = arr1;
arr2.push(4);
console.log(arr1,arr2);
//数组的深拷贝
var arr3 = [1,2,3];
var arr4 = [];
for (var i=0;i<arr3.length;i++){
    arr4[i] = arr3[i];
}
console.log(arr4);
arr4.push(4);
console.log(arr3,arr4);
//es6实现数组的深拷贝
var arr5 = [1,2,3];
var arr6 = Array.from(arr5);
console.log(arr6);
//超引用拷贝数组
var arr7 = [...arr5];
console.log(arr7);
function show(...args) {
    args.push(5);
    console.log(args)
}
show(arr1);
