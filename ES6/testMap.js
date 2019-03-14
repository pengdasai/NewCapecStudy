var map = new Map();
map.set('a','apple');
map.set('b','banana');
console.log(map.get('a')+"--"+map.get('b'));
console.log(map);
//删除对象
map.delete('a');
console.log(map);
map.set('a','apple');
map.set('c','orange');
//下面for...in循环不能循环map对象。没有任何输出
for (var name in map){
    console.log(name);
}
//实体 map对象的输出:key:value形式
for (var name of map){
    console.log(name);
}
//只循环key
for (var key of map.keys()){
    console.log(key);
}
//循环values
for (var value of map.values()){
    console.log(value);
}