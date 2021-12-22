function factorial(num) {
    var fact = 1
    for (var i = 2; i <= num; i++) {
        fact *= i
    }
    return fact
} 

function clac(x, i) {
    return (x ** i) / factorial(i)
}


var x = 2
var n = 5
var sum = 0

for (var i = 1; i <= n; i++) {
    // if (i%2 ==0)
    // s == 0
    sum += clac(x, i)
}

console.log(sum)



// arr.length//5


/* var arr = [1 , 2 , 3 , 4 , 5]

for var i */