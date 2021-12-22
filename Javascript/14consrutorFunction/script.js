//consrutor function

// let student = function (name, course) {
//     this.name = name
//     this.course = course
// }

// let s1 = new Student("ankush", "mern")

// console.log(s1)

// console.log(Student)


var res = 10;

function sum(num1 = 10, num2, ...rest) {
    console.log(num1, num2, rest);
}

sum(10, 20, 30, 40, 50);

console.log(res);

// if(true){
//     let a = 10
// }

// console.log(a)
// console.log(num1)
// console.log(num2)

// console.log(b)

// let  b = 30

const DB_URL = "mongodb://localhost:27017/";

var arr1 = [10, 20, 30];

var arr2 = arr1.map(function (e) {
    return e;
});


//spread operator
arr2 = [...arr1] //[arr1[0], arr1[1], arr1[2]]

arr2.push(60);

console.log(arr1, arr2);


let obj = { name: "geeksdoor", course: "MERN", trainer: "suyash kumar" }

// obj.DB_URL = "xyz"
// console.log(obj)


// let name = obj.name
// let trainer = obj.trainer

//destructuring
let { name, trainer, } = obj
console.log( name, trainer)

let students = ["sanjay", "arbaaz", "devendra"]

let [std1, std2] = students
console.log(std1, std2)

//string template || String Interpolation


// consructor function
// let Student = function(name, course){
//   this.name = name
//   this.course = course
// }


// let s1 = new Student("suyash", "mern")

// console.log(s1)

class Abc {


    showHi() {
        console.log("hi")
    }

    showBye() {
        console.log("bye")
    }
}


class Student extends Abc {
    constructor(name) {
        super()
        this.name = name
        console.log("new object created")
    }

    showHi() {
        console.log("HI HI", this.name)
    }

    greetStudent() {
        console.log("good evening", this.name)
    }
    showBye(){
        console.log("Please Take Seat", this.name)
    }

}

var s1 = new Student("Devendra")

console.log(s1)
s1.greetStudent()
s1.showHi()
s1.showBye()
