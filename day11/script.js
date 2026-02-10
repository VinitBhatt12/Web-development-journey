const todo = document.querySelector('#todo');
const progress = document.querySelector('#progress');
const done = document.querySelector('#done');
const task = document.querySelectorAll('.task');
const columns=[todo,progress,done]
let dragtask=null;

task.forEach(task=>{
    task.addEventListener("drag",(e)=>{
        dragtask=task;
    })
})
 
function addDragEvent(column){
    column.addEventListener("dragenter",(e)=>{  //jese he column mai task drag hoga, to progress mai class add ho jayegi
        e.preventDefault();
        column.classList.add("hover-over");
    })
    column.addEventListener("dragleave",(e)=>{ //Jese he column mai tash drag out hoga, to progress se class remove ho jayegi
        e.preventDefault();
        column.classList.remove("hover-over");
    })
    column.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })
    column.addEventListener("drop",(e)=>{
        e.preventDefault();
        column.appendChild(dragtask);
        column.classList.remove("hover-over");

        columns.forEach(col =>{
            const tasks=col.querySelectorAll(".task");
            const count =col.querySelector(".right");

            count.innerText = tasks.length;
        })
    })
}

addDragEvent(todo);
addDragEvent(progress);
addDragEvent(done);

const modalButton = document.querySelector("#toggle-modal");
const modal = document.querySelector(".modal")
const modalBg = document.querySelector(".modal .bg")
const addTaskButton = document.querySelector("#add-new-task");

modalButton.addEventListener("click",()=>{
    modal.classList.toggle("active")
})

modalBg.addEventListener("click",()=>{
    modal.classList.toggle("active")
})

addTaskButton.addEventListener("click",()=>{
    const taskTitle = document.querySelector("#taskTitle").value;
    const taskDesc = document.querySelector("#taskDesc").value;

    const div = document.createElement('div');

    div.classList.add("task");
    div.setAttribute("draggable","true");

    div.innerHTML=`
        <h2>${taskTitle}</h2>
        <p>${taskDesc}</p>
        <button>Delete</button>
    `
    todo.appendChild(div)

    div.addEventListener("drag",(e)=>{
        dragtask = div;
    })

    modal.classList.remove("active");
})