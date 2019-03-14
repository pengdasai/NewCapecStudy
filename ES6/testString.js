//传统字符串的拼接
var str1 = '1';
var str2 = '2';
var str = str1+str2;
console.log(str)
//字符模板的写法
var s1 = 'apple+';
var s2 = 'banana';
var strNew = `${s1}${s2}`;
console.log(strNew);
//
var {v:n} = {v:'vue',r:'react'};
console.log(n);//vue 将v的值赋值给n
console.log(v);//undefine
console.log(r)