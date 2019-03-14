//传统对象_单体模式写法 key-value模式
var person = {
    name:'pss',
    age:24,
    showName:function () {
        return person.name;
    },
    showAge:function () {
        return this.age;
    }
}
console.log(person.showName());
console.log(person.showAge());
//ES6_单体模式写法 不需要写key
var name = 'wp';
var age = 23;
var friend={
    name,
    age,
    showName1(){
        return this.name;
    },
    showAge1(){
        return this.age;
    }
}
console.log(friend.showName1());
console.log(friend.showAge1());