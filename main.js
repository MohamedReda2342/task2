let usrnameField = document.getElementById("name");
let passwordField = document.getElementById("password");
let Button = document.getElementById("loginButton")
let alertField = document.getElementById("Alert");

passwordField.addEventListener("focus",function(){
    Button.removeAttribute("disabled");
});
usrnameField.addEventListener("focus",function(){
    Button.removeAttribute("disabled");
});

// let passCheck = /([0-9]&[a-z])/ig
let mailformat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
let regex = /[A-Za-z\d@#$%^&+=!]{5,}/


window.localStorage.setItem("abc@def.com", "12345ww@");
window.localStorage.setItem("xyz@asd.com", "246810ww@");
window.localStorage.setItem("ghi@klm.com", "13579aa@");
window.localStorage.setItem("opq@mno.com", "abc321@");
window.localStorage.setItem("jkl@wxy.com", "def543@");


    



// console.log(window.localStorage.getItem(usrnameField.value));

Button.addEventListener('click',function(){

    if(usrnameField.value==="" && passwordField.value===""){
        alertField.innerHTML="Please fill username & password  fields"
        Button.setAttribute("disabled","");
    }
// - password should have characters, numbers and special character
    else if(passwordField.value.match(regex)==null){
        alertField.innerHTML="password should have characters, numbers and special character";
        Button.setAttribute("disabled","");
    }
    else if(usrnameField.value.match(mailformat)==null){
        alertField.innerHTML="email field has no proper format (ex. abc@xyz.com)";
        Button.setAttribute("disabled","");
    }
    else if(window.localStorage.getItem(usrnameField.value)== passwordField.value){
        window.location="/HomePage.html";
       }
       else{
           alertField.innerHTML="Not found , Please Sign Up";   
       }
    // --------------------------- TEST-----------------
    // else if(passwordField.value.match(regex)==null)
    // console.log("no");
    // else
    // console.log('yes');

    

    
});

