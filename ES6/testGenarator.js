//生成器
function *createIterator() {
    yield 1;
    yield 2;
    yield 3;
}
//可以被调用，但是会返回一个迭代器
let iterator = createIterator();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

console.log('-----------------')

//自动调用生成器并启动迭代器的方法
function run(taskDef) {
    //创建迭代器，让他在别处可以使用
    let task = taskDef();
    //启动任务
    let result = task.next();
    //递归使用函数对next调用
    function step(){
        if (!result.done){
            console.log(result.value);
            result=task.next();
            step();
        }
    }
    step();
}

//生成器
function *createIterator(){
    yield 1;
    yield 2;
    yield 3;
}

run(createIterator())