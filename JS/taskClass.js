export default class Task {
    constructor(_parent, _item, _index,_delTask) {
        this.parent = _parent;
        this.index = _index;
        this.name = _item.name;
        this.time = _item.time;
        this.delTask=_delTask;
      
    }
    render() {
        let newTr = document.createElement("tr");
        document.querySelector(this.parent).append(newTr);
        newTr.innerHTML = `
                    <td>${this.index + 1}</td>
                    <td>${this.name}</td>
                    <td>${this.time}</td>
                    <td><button class="del-btn">Delete</button></td>
`
        let delBtn = newTr.querySelector(".del-btn");
        delBtn.addEventListener("click", () => {
            this.delTask(this.index)
            
        })

    }
}