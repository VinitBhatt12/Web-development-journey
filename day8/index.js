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
let arr=[1,2,3,"vinit",true];
let brr=new Array(1,"vinit","bhatt","hello","Dosto",true)
// console.log(brr);
// console.log(typeof(arr));
// console.log(typeof(arr));
arr.push("false")
console.log("Push => "+arr); 
arr.pop();
console.log("pop => "+arr); 
arr.shift();
console.log("shift =>"+arr); 
arr.unshift(1);
console.log("UnShift \"1\" => "+arr); 
console.log(arr[3])
brr.splice(3,1 ,"xyz");
console.log(brr);