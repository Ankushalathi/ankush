/* var n= 5

for(var count=1;  count<=n; count++){
      console.log(count)
} */

/* var n= 5
for( var count=1 ; count<=10; count++){
    console.log(count*5)
} */


var n= 23
var count = 0
for ( var i=1; i<=n ; i++){

    if( n % i ==0){
    console.log( i)
    count++
} 
}

console.log ("total number :", count)

if (count >2){
    console.log("not prime")
} else {
    console.log("prime number:", n)
}
 
/* 
var n= 17
var count = 0
for( var i=1; i<=n ; i++){
    if ( n% i ==0 ){
      console.log( i)
      count++
    }
} 

console.log ("total number :", count)

if (count > 2){
    console.log("not prime")
}else{
    console.log("prime number :" , n)
} */