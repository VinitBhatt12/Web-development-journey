let a=4;
// console.log(++a);
// console.log(a);

// console.log(10>5);
// console.log(10<5);
// console.log(10>=5);
// console.log(10<=5);
// console.log(10==5);
// console.log(10===5);
// console.log("strictly equal and not");
// console.log('5'===5);
// console.log('5'==5);
// console.log('5'!=5);
// console.log('5'!==5);
// console.log("Bitwise Operator");
// console.log(5<<2);

// ==========================for loop==========
// for(let i=0;i<=5;i++){
//     if(i==3){
//         break;
//     }
//     console.log(i);
// }
// ==========================while loop========
// let i=0;
// while(i<=5){
//     console.log(i);
//     i++;
// }
// =========================do while loop=====
// do{
//     console.log(i)
//     i++;
// }while(i<=5)
// ==========================String=======
// let name = `my
// name is 
// vinit bhatt
// .`;
// console.log(name); 

// let firstName="Vinit Bhatt ";
// let lastName='bhatt';
// let fullName = new String("vinit bhatt");
// let final=firstName + lastName + " and " + lastName + "!";
// console.log(final)
// console.log(firstName + lastName + " and " + lastName + "!")
// final=`${firstName} and ${lastName} `
// console.log(final)

// let upper=firstName.toUpperCase();
// let lower=firstName.toLowerCase();
// console.log(upper)
// console.log(lower)

// let intro=`My name is vinit bhatt`;
// console.log(intro.substring(1));
// console.log(intro.substring(3,6));

// let sent="hello ji kese ho sare";
// let words=sent.split(' ');
// sent="hello ji \"kese\" ho sare";
// sent="helloji \\kese\\ ho \ sare";
// words=sent.split('\\');
// console.log(words);

// ==========================FUNCTIONS=======
// function greet(a){
//     console.log("hello " + a + "how are you ?")
// }
// greet("vinit");

// function getSum(a,b,c){
//     let sum = a+b+c;
//     return sum;
// }
// let ans=getSum(1,2,3);
// console.log(getSum(1,2,3));

// let getSum=(a,b,c) => {
//     let sum=a+b+c;
//     return sum;
// }
// console.log(getSum(1,2,3));

// =============================object===========
// let studentData={
//     name:"vinit",
//     // "full name":"vinit bhatt",
//     age:23,
//     weight:"6ft",
//     CGPA:7.4,
//     greet:function(){
//         console.log("hello dosto ");
//     }
// };

// console.log(studentData);
// studentData.greet();

// ==========================Array================
let arr=[1,2,3,"vinit","true"];
let brr=new Array(1,"vinit","bhatt","hello","Dosto",true)
// console.log(brr);
// console.log(typeof(arr));
// console.log(typeof(arr));
// arr.push("false")
// console.log("Push => "+arr); 
// arr.pop();
// console.log("pop => "+arr); 
// arr.shift();
// console.log("shift =>"+arr); 
// arr.unshift(1);
// console.log("UnShift \"1\" => "+arr); 
// console.log(arr[3])
// brr.splice(3,1 ,"xyz");
// console.log(brr);

// let ans=arr.map((nub) => {
//     return nub+1;
// })
// console.log(ans);
// arr.map((nub , ind) => {
//     console.log(nub , ind)
// })

// let ans = arr.filter((value)=>{
//     if(typeof(value) == 'string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans);

// let arr2=[1,2,3,4];
// let ans=arr2.reduce((acc,curr)=>{
//     return acc+curr;
// },0)
// console.log(ans);

// function count_vowel(string){
//     let count=0;
//     for(let value of string){
//         if(value==='a' ||value === 'e' || value==='i' || value==='o' || value==='u'){
//             count++;
//         }
//     }
//     console.log(count);
// }
// count_vowel("vinit bhatt is");

// let count_vowel=(string)=>{
//     let count=0;
//     for(let value of string){
//         if(value==='a' ||value === 'e' || value==='i' || value==='o' || value==='u'){
//             count++;
//         }
//     }
//     // console.log(count)
//     return count;

// }
// console.log(count_vowel("vinit bhatt"))

// let nums=[1,2,3,4,5]

// nums.forEach((val)=>{
//     console.log(val*val);
// })
// let square=(nums)=>{
//     console.log(nums*nums);
// };
// nums.forEach(square);

// class human{
//     age=23;
//     #wt=65;
//     ht=6.2;

//     walk(){
//         console.log("i am walking",this.#wt)
//     }
//     run(){
//         console.log("i am running")
//     }
// }

// let obj=new human();
// console.log(obj.age);
// obj.walk();

// function greet(name="vinit",lastname="bhatt"){
//     console.log("my name is",name , lastname);
// }
// greet( "anant");

// let crr =[1,2,3,4,5]
// console.log(Math.max(1,2,3,5,6,3,2,1))
// console.log(Math.min(1,2,3,5,6,3,2,1))
// console.log(Math.round(11.6))
// console.log(Math.floor(11.6)) //just smaller no.
// let time=Date();
// // console.log(Date());
// console.log(time);

// let heading=document.getElementById("head1")
// let heading2=document.getElementsByClassName("head2")
// console.log(heading);
// console.dir(heading);
// console.log(heading2);
// console.dir(heading2);

// let mydiv=document.querySelector('#head1');
// let newElement=document.createElement('span');
// newElement.textContent="this is again"
// mydiv.insertAdjacentElement('afterend',newElement)

// let paraElement=document.getElementById('head1')

let button1=document.querySelector(".click")
let button2=document.querySelector(".dclick")
// console.log(button1)
// button1.onclick=()=>{
//     console.log("one click");
// }
// button2.onmouseover=()=>{
//     console.log("2x click")
// }
let bd=document.querySelector("body")
// button1.addEventListener("click",()=>{
//     bd.style.backgroundColor="black"
// })
// button1.addEventListener("dblclick",()=>{
//     bd.style.backgroundColor="red"
// })

let mode="light";

// button1.addEventListener("click",()=>{
//     if(mode === "light"){
//         mode = "dark";
//         bd.style.backgroundColor="black";
//         console.log(mode)
//     }
//     else{
//         mode="light";
//         bd.style.backgroundColor="white";
//         console.log(mode)
//     }
// })

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