let local_ar=localStorage["task"] ? JSON.parse(localStorage["task"]):[]; 
 
 const init = () => {
    declareViewEvents();
}

const declareViewEvents = () => {
    let form = document.querySelector("#id_form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        //console.log("form send")
        let taskObj = {
            name:document.querySelector("#name").value,
            time:document.querySelector("#time").value,
           
        }
        console.log(taskObj)
        if(taskObj.name.length<2){
            return alert("Name too short, min 2 chars")
        }
        else if(taskObj.time<1 || taskObj.time>24){
            return alert("time need to be between 1-24")
        }

        local_ar.push(taskObj);
        console.log(local_ar);
        localStorage.setItem("task",JSON.stringify(local_ar))
        alert("משימה נוספה למערכת בהצלחה")

    })







}




init();