


export class View{
    constructor(element){ 
        this.parent = element["parent"];
        this.elementList = element["view"];
        this.ViewList = [];
        this.eventList = [];
        for (let i = 0; i < this.elementList.length; i++){
            if (this.elementList[i]["type"] == "button"){
                let UIButton = document.createElement("a");
                UIButton.setAttribute("class", "default-Button");
                UIButton.setAttribute("id", this.elementList[i]["id"]);
                UIButton.innerHTML = this.elementList[i]["text"]
                let eventDict = {"triger": this.elementList[i]["event"][0]};
                this.ViewList.push(UIButton);
                this.eventList.push(eventDict);
            } else if (this.elementList[i]["type"] == "text"){

            }
        }
    }
    
    show(){
        let parent;
        if (this.parent == "body"){
            parent = document.body;
        } else {
            parent = this.parent;
        }
        for (let i = 0; i < this.ViewList.length; i++){
            parent.appendChild(this.ViewList[i]);
        }
    }

}

/* element = {
    "parent": "xxxx"
    "view": [
        {"type": "button", "text": "xxxx", "id", "xxx-xxxx", "event", [trigger, function()]},
        {""}.....
    ]
} */