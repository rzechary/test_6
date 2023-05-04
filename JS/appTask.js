import Task from "./taskClass.js";

let local_ar=localStorage["task"] ? JSON.parse(localStorage["task"]):[]; 


const init = () => {
    createAllTasks(local_ar);
}
const createAllTasks =(_ar)=>{
    document.querySelector("#id_tbody").innerHTML="";
    _ar.forEach((item,i)=>{
     let task1=new Task("#id_tbody",item,i,delTask)
    //  delTask();
     task1.render();
    })
}
const delTask =(_index)=>{
    confirm("Do you sure you want delete this task?");
    local_ar.splice(_index,1);
    localStorage.setItem("task", JSON.stringify(local_ar));
    createAllTasks(local_ar)
   
}


    


init();