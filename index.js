let name=document.querySelector("#Firstname")
let other=document.querySelector("#Othername")
let email=document.getElementById("email")
let password=document.getElementById("password")
let number=document.querySelector("#number")
let checks = document.querySelectorAll(".check")
let button=document.querySelector(".btn")

button.addEventListener("click",(e)=>{
    console.log(other.value);
    console.log(email.value);
    console.log(password.value);
    console.log(number.value);
    checks.forEach((check) => {
        if (check.checked) {
            console.log(check.value)
        }
    })
})


