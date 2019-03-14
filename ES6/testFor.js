var arr = ['红楼梦','西游记','三国演义','水浒传'];
for (var key of arr.keys()){
    console.log(key);//自动换行
}
for (var value of arr){
    console.log(value);
}
//循环key-value
for (var [key,value] of arr.entries()){
    console.log([key,value])
}
//for in循环与for of循环的区别
var fruit = ['apple','banana','orange','pear'];
for (var i in fruit){
    console.log(i)//索引
}
for (var i of fruit){
    console.log(i);//值
}
//注意for..of可以循环arr，但是不可以循环json,会报错
var json = {'a':'apple','b':'banana','c':'orange','d':'pear'};
for (var name in json){
    console.log("---------------")
    console.log(name);
    console.log(json.a);
    console.log(json['c']);
}