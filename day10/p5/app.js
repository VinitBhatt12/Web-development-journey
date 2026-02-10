let div=document.querySelector('div');

function showTime() {
    let time = new Date();
    div.textContent=time.toLocaleTimeString()
}
setInterval(showTime,1000);

// setInterval(()=>{
//     let time = new Date();
//     div.textContent=time.toLocaleTimeString()
// },1000)

// console.log(time.toLocaleTimeString());