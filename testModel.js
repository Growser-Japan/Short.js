

class View{
    constructor(parent){
        //variable
        this.button;
        this.label;
        this.frame;
        //to here
        this.parent = document.createElement("div");
        this.parent.setAttribute("class", "View");
        this.frameList = [];
    }

    Frame(data){//data = {"id": "xxxxxx"}
        this.frame = document.createElement("div");
        this.frame.setAttribute("class", "dfault-frame");
        this.frame.setAttribute("id", data["id"])
        document.body.appendChild(this.parent);
        this.parent.appendChild(this.frame)
        this.frameList.push(this.frame)
    }

    Button(frame, data) {
        this.button = document.createElement("a");
        this.button.setAttribute("class", "default-Button");
        this.button.setAttribute("id", data["id"]);
        this.button.innerText = this.data["text"];
        this.button.onclick = this.clicked();
        for (let i = 0; i < this.frameList.length; i++){
            if (frame.id == this.frameList[i].id){
                this.frameList[i].appendChild(this.button);
            }
        }
    }

    TextField(frame, data){
        this.button.style
    }


    Label(frame, data) {
        this.label = document.createElement("div");
        this.label.setAttribute("class", "default-Label");
        this.label.setAttribute("id", data["id"]);
        for (let i = 0; i < this.frameList.length; i++) {
            if (frame.id == this.frameList[i].id) {
                this.frameList[i].appendChild(this.label);
            }
        }
    }
    show(id){
        for (let i = 0; i < this.frameList.length; i++){
            if(id == this.frameList[i].id){
                this.frameList[i].style.display = "block";
            }
        }
    }

    //ControllerMoodel
    hidden(){
        for (let i = 0; i < this.frameList.length; i++) {
            if (id == this,frameList[i].id){
                this.frameList[i].style.display = "none";
            }
        }
    }

    switch(from, to){
        for (let i = 0; i < this.frameList.length; i++){
            if (from == this.frameList[i].id){
                this.frameList[i].style.display = "none";
            }
        }
        for (let i = 0; i < this.frameList.length; i++){
            if (to == this.frameList[i].id){
                thiis.frameList[i].style.display = "block";
            }
        }
    }
    /*Clicked Listener*/
    /*
    clickedListener(eventName){
        if (eventName === "xxx"){
            xxxxx
        }
    }
    */
}
