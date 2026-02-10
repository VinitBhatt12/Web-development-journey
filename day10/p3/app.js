const form=document.querySelector('form');

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const boy = document.getElementById("boy")
    const girl = document.getElementById("girl")
    console.log(boy)
    console.log(girl)
    const v1=boy.value.length;
    const v2=girl.value.length;

    const result=Math.pow(v1+v2,3)%101;

    document.querySelector("h2").textContent=`result :- ${result}`;
})