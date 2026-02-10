// let bt1=document.querySelector(".button1");
// let bt2=document.querySelector(".button2");
// let bt3=document.querySelector(".button3");
// let bt4=document.querySelector(".button4");
// let bt5=document.querySelector(".button5");
// bt1.addEventListener("click",()=>{
//     document.body.style.backgroundColor='red';
// })
// bt2.addEventListener("click",()=>{
//     document.body.style.backgroundColor='black';
// })
// bt3.addEventListener("click",()=>{
//     document.body.style.backgroundColor='yellow';
// })
// bt4.addEventListener("click",()=>{
//     document.body.style.backgroundColor='white';
// })
// bt5.addEventListener("click",()=>{
//     document.body.style.backgroundColor='pink';
// })

const parent=document.querySelector("#parent");

parent.addEventListener("click",(e)=>{
    const child=e.target;
    document.body.style.backgroundColor=child.id;
})