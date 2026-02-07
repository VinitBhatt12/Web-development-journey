let bd=document.querySelector("body")
console.log(bd)
let button1=document.querySelector(".mode")
console.log(button1)
let mode="light";

button1.addEventListener("click",()=>{
    if(mode === "light"){
        mode = "dark";
        bd.classList.add("dark")
        bd.classList.remove("light")
    }
    else{
        mode="light";
        bd.classList.add("light")
        bd.classList.remove("dark")
    }
    console.log(mode)
})