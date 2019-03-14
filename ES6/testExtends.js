//传统继承
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.showName=function () {
    return this.name;
};
Person.prototype,showAge=function () {
    return thus.age;
}
//子类
function Worker(name,age){
    Person.apply(this,arguments);
}
//原型继承
Worker.prototype = new Person();
var p1 = new Person('迪科',22);
var w1 = new Worker('树维',23);
console.log(w1.showName());

console.log('---------------')
// ES6中的继承
class Book{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showName(){
        return this.name;
    };
    showAge(){
        return this.age;
    }
}

//子类继承
class Math extends Book{
    constructor(name,age,job='diffcult'){
        super(name,age);
        this.job=job;
    }
    showJob(){
        return this.job;
    }
}

var b1 = new Book('课本',10);
var m1 = new Book('超类',11);
var m2 = new Math('数学',12);
console.log(b1.showName());
console.log(m2.showJob());