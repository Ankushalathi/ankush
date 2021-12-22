//swap without using third varible
var x = 10
var y = 20

var swapx = (x = x + y, y = x - y, x = x - y)
var swapy = (x = x + y, y = x - y, x = x - y)
console.log("x", swapx, "y", swapy)


//maximum between two numbers
var num1 = 10
var num2 = 10

if (num1 > num2) {
    console.log("Num1", num1)
} else if (num2 > num1) {
    console.log("Num2", num2)
} if (num1 == num2) {
    console.log("Both Are Equal")
}


//maximum between three numbers
var num1 = 15
var num2 = 15
var num3 = 18


if ((num1 > num2) && (num1 > num3)) {
    console.log("num1", num1)
} if (num2 > num1 && num2 > num3) {
    console.log("num2", num2)
} if (num3 > num1 && num3 > num2) {
    console.log("num3", num3)
}




// vowel & consonant

var ch = 'A'

if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
    console.log("It Is Vowel")
} else {
    console.log("it is consonant")
}

var num = 2

if (num % 2 == 0) {
    console.log("even")
} else {
    console.log("odd")
}



// Divisible By 5 And 11 Or Not


var num = 55

if ((num % 5 == 0) && (num % 11 == 0)) {
    console.log("Num Divisible By 5 And 11",)
} else {
    console.log("Num Is Not Divisible By 5 And 11",)
}


// negative positive or zero

var num = 8

if (num > 0) {
    console.log("Number is POSITIVE")
} else if (num < 0) {
    console.log("Number is NEGATIVE")
} else if (num == 0) {
    console.log("Number is ZERO")
}


//leap year

var year = 1970

if (year % 400 == 0) {
    console.log(" is a leap year ", year)
} else if (year % 100 == 0) {
    console.log("is a not leap year", year)
} else if (year % 4 == 0) {
    console.log("is a leap year", year)
} else {
    console.log("is a not leap year")
}


//week day

var wd = 2

if (wd == 1) {
    console.log("monday")
} else if (wd == 2) {
    console.log("Tuesday")
} else if (wd == 3) {
    console.log("Wednsday")
} else if (wd == 2) {
    console.log("Thusrday")
} else if (wd == 2) {
    console.log("Friday")
} else if (wd == 2) {
    console.log("Saturday")
} else if (wd == 2) {
    console.log("Sunday")
}


//months 

var month = 7

if (month == 1) {
    console.log("Janubary 31 Days")
} else if (month == 2) {
    console.log(" Febuary 28 or 29 days")
} else if (month == 3) {
    console.log("March 31days")
} else if (month == 4) {
    console.log("April 30 days")
} else if (month == 5) {
    console.log("May 31days")
} else if (month == 6) {
    console.log("June 30 days")
} else if (month == 7) {
    console.log("July 31 days")
} else if (month == 8) {
    console.log("August 31 days")
} else if (month == 9) {
    console.log(" September 30 days")
} else if (month == 10) {
    console.log(" October 31 days")
} else if (month == 11) {
    console.log(" November 28 or 29 days")
} else if (month == 12) {
    console.log("December 30 days")
}




// gross salary

var basic = 22000

if (basic <= 10000) {
    da = basic * 0.8;
    hra = basic * 0.2;
} else if (basic <= 20000) {
    da = basic * 0.9;
    hra = basic * 0.25;
} else {
    da = basic * 0.95;
    hra = basic * 0.3;
}

gross = (basic + da + hra);

console.log("Basic Salary", basic)
console.log("gross salary", gross)


//notes

var amt = 7750

var note2000 = ""
var note500 = ""
var note100 = ""
var note50 = ""
var note20 = ""
var note10 = ""
var note5 = ""
var note2 =  ""
var note1 = ""

note2000 = parseInt (amt/2000)
amt = amt % 2000

console.log("2000", note2000)
console.log("500=", note500)
console.log("100=", note100)
console.log("50=", note50)
console.log("20=", note20)
console.log("10=", note10)
console.log("5=", note5)
console.log("2=", note2)
console.log("1=", note1) 


//i bus

var station = {
    RGS :{
        dist: 0,
        next :"VPS",
        prev:""
    },
    VPS:{
        dist:5,
        next:"BHW",
        prev:"RGS"
    },

    BHW:{
        dist:12,
        next:"HOL",
        prev:"VPS"

    },
}


var src = "RGS"
var dst = "BHW"

var srcInfo = station[src]
var dstInfo = station[dst]

var continuesly = srcInfo.next == dst || srcInfo.prev == dst

var far = 0
if (continuesly){
    far=5
} else {
    var totalDistTravel = dstInfo.dist- srcInfo.dist
    
    totalDistTravel = totalDistTravel < 0 ? -1*totalDistTravel : totalDistTravel

    var addistionalDist = totalDistTravel-3
if (addistionalDist > 0 ){
     far =5 + addistionalDist*1.5 
}

}

console.log(srcInfo,dstInfo, continuesly  ,addistionalDist,far )