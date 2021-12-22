var talk = function (fx) {
    fx();
}

var sayHi = function () {
    console.log("Hi")
}

talk(sayHi)

//
function sum(a, b) {
    return a + b;
}

var calc = function (fx, a, b) {
    return fx(a, b);
}

console.log(calc(diff, 4, 5))


//
function diff (a,b){
    return a*b ;
}

var clac = function(fx,a,b){
    return fx (a,b) ;
}

console.log(clac(diff,8,8))


var dog = {
    name : "tommy" ,
    displayName : function(){
        console.log(this.name)
    }
}
