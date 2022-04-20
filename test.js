import {View} from "./Short.js"

let MainView = new View({
    "parent": "body",
    "view": [
        {"type": "button", "text": "テストボタン", "id": "xxxx", "event": ["click"]}
    ]
})
MainView.show();

function testFunction() {
    console.log("OK")
}

function eventListener(){
    for (let i = 0; i < MainView.eventList.length; i++) {
        dgi(MainView.elementList[i].id).addEventListener(MainView.eventList[i]["triger"], testFunction, false);
    }
}
eventListener()