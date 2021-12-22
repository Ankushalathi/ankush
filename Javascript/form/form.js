
var btnName = document.getElementById("btnName")

btnName.addEventListener("click", function(){
    var nameValue  = document.getElementById("name").value
    var namePattern = /^[a-zA-Z ]{2,30}$/
    
    // console.log(namePattern)

    if(namePattern.test(nameValue)){
        document.getElementById("nameErr").innerText ="*invalid name format*"
    }else{
        document.getElementById("nameErr").innerText = ""
    }
})


var btnSave = document.getElementById("btnSave")

btnSave.addEventListener("click", function(){
    var emailValue = document.getElementById("email").value
     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // var emailPattern = ("[a-zA-Z0-9]{1,}[@]{1}[a-z]{5,}[.]{1}+[a-z]{3}", "abcd@gmail.com");

    if(!emailPattern.test(emailValue)){
        document.getElementById("emailErr").innerText = "*invalid email format*"
    }else{
        document.getElementById("emailErr").innerText = ""

    }

})

var btnclick = document.getElementById("btnclick")

btnclick.addEventListener("click",function(){
    var numberValue= document.getElementById("number").value
    var numberPattern =isNaN("9999999999")

    // console.log(numberPattern)

    if(!numberPattern.test(numberValue)){
        document.getElementById("numerr").innerText = "*invalid number*"
    }else{
        document.getElementById("numerr").innerText = ""
    }
})

document.getElementById("showHidePwd").addEventListener("click", function(){
    console.log(this)
    var type = document.getElementById("pwd").type
    if(type=="password"){
        this.innerText = "Hide"
        document.getElementById("pwd").type = "text"

    }else{
        this.innerText = "Show"
        document.getElementById("pwd").type = "password"

    }
})

document.getElementById("check").addEventListener("change", function(e){
    console.log(e.target.checked)
   
   // alert(isChecked)
})


document.getElementById("select").addEventListener("change", function(e){
    console.log(e.target.value)
} )



document.getElementById("frm").addEventListener("submit", function(e){
    e.preventDefault()
    alert("form is go")
})