var a = [];
//for循环
for (var i=0;i<10;i++){
    a[i] = function () {
        console.log(i)
    };
}
a[6]