const form = document.querySelector("form");

form.addEventListener('submit',(e)=>{

    e.preventDefault();
    const income = document.querySelector("#income");
    
    const amt = parseInt(income.value);
    
    console.log(amt);

    const result = document.querySelector("h2")

    let tax=0;
    if(amt<=1200000){
        tax = 0;
    }
    else if(amt<=1600000){
        tax = (amt-1200000)*0.15;
    }
    else if(amt<=2000000){
        tax = (amt-1600000)*0.20 + 60000;
    }
    else if(amt<=2400000){
        tax = (amt-2000000)*0.25 + 60000+80000;
    }
    else{
        tax=(amt-2400000)*0.30 + 60000+80000+100000;
    }

    result.textContent=`Tax is:-${tax}`;

    e.reset();
})
