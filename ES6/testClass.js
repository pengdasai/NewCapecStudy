//传统写法
function Person(name,age) {//类，构造函数
    this.name=name;
    this.age=age;
}
Person.prototype.showName = function () {
    return this.name;
};
Person.prototype.showAge = function () {
    return this.age;
};
var p1 = new Person('迪克',23);
var p2 = new Person('新开普',22);
console.log(p1.showName());
console.log(p1.showAge());
console.log(p1.showName==p2.showName);//T
console.log(p1.constructor == Person)//T
console.log('--------------')
//ES6环境下的写法
class Animal{
    //构造器
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showName(){
        return this.name
    }
    showAge(){
        return this.age;
    }
}
var a1 = new Animal('tiger',10);
var a2 = new Animal('lion',8);
console.log(a1.name);
console.log(a1.showName());
console.log(a1.showAge==a2.showAge);
console.log(a1.constructor==Animal);