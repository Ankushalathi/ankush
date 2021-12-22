document.getElementById("frm").addEventListener("submit", function(e){
    e.preventDefault()
 


    var email = document.getElementById("email").value
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if(emailReg.test(email)){
        document.getElementById("emailErr").innerText = ""
    }else{
        document.getElementById("emailErr").innerText = "Invalid Email "
    }


    var pwd = document.getElementById("pwd").value
    var pwdReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/

    if(pwdReg.test(pwd)){
        document.getElementById("pwdErr").innerText = ""
    }else{
        document.getElementById("pwdErr").innerText = "Invalid Password "
    }
})

