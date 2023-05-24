const username=document.getElementById("username")
const pword=document.getElementById("password")
const button=document.querySelector(".btn")

button.addEventListener("click", (e)=>{
    e.preventDefault()
    console.log(username.value);
    console.log(pword.value);
})

