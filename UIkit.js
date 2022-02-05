//class 
class View {
    constructor(name, id, state) {
        this.name = name;
        this.id = id
        let view = document.createElement('div')
        view.setAttribute('class', 'View')
        view.setAttribute('id', id)
        document.body.insertBefore(view, document.body.firstChild)
        if (state == true) {
            view.style.display = 'block'
        } else if (state == false) {
            view.style.display = 'none'
        }
    }

    switch(from, to) {
        document.getElementById(from).style.display = 'none'
        document.getElementById(to).style.display = 'block'
    }
}


class Button {
    constructor(parent) {
        this.name;
        this.parent = parent;
        this.id;
        this.type;
        this.title;
        this.button = document.createElement('a');
        this.button.setAttribute('class', 'default-Button');
    }
    next(element) {
        this.button.setAttribute('class', 'default-Button');
        this.button .setAttribute('id', this.id);
        this.button.innerText = this.title;
        let parent_view = document.getElementById(this.parent.id);
        parent_view.insertBefore(this.button, element.nextSibling);
    }
    first(){
        this.button.setAttribute('class', 'default-Button');
        this.button.setAttribute('id', this.id);
        this.button.innerText = this.title;
        let parent_view = document.getElementById(this.parent.id);
        parent_view.insertBefore(this.button, parent_view.firstChild);
    }
    last(){
        this.button.setAttribute("id", this.id);
        let parent_view = document.getElementById(this.parent.id);
        this.button.innerText = this.title;
        parent_view.appendChild(this.button);
    }
   
}


class TextField {
    constructor(parent, placeholder, name, type) {
        this.name = name;
        this.parent = parent;
        this.id;
        this.placeholder;
        this.type = type
        this.text = document.createElement('input')
        if (type == 'password') {
            this.text.setAttribute('type', 'password')
        } else if (type == 'email') {
            this.text.setAttribute('type', 'email')
        } else {
            this.text.setAttribute('type', 'text')
        }
        this.text.setAttribute('class', 'default-text');
        this.text.setAttribute("placeholder", placeholder);
    }
    last(){
        this.text.setAttribute("id", this.id);
        let parent_view = document.getElementById(parent.id);
        parent_view.appendChild(this.text);
    }
    next(element){
        this.text.setAttribute("id", this.id);
        let parent_view = document.getElementById(parent.id);
        parent_view.insertBefore(this.text, element.nextSibling);
    }
    first(){
        this.text.setAttribute("id", this.id);
        let parent_view = document.getElementById(this.parent.id);
        parent_view.insertBefore(this.text, parent_view.firstChild);
    }
    getValue() { 
        return this.text.value;
    }
    setValue(text) {
        this.text.value = text;
    }
    clear() {
        this.text.value = "";
    }
}



class Label {
    constructor(parent) {
        this.parent = parent;
        this.id;
        this.text;
        this.name;
        this.font_size;
        this.label = document.createElement("div");
    }
    last(){
        this.label.setAttribute("id", this.id);
        let parent_view = document.getElementById(this.parent.id);
        parent_view.appendChild(this.label);
    }
    next(element){
        this.label.setAttribute("id", this.id);
        let parent_view = document.getElementById(this.parent.id);
        parent_view.insertBefore(this.label, element.nextSibling);
    }
    first(){
        this.label.setAttribute("id", this.id);
        let parent_view = document.getElementById(this.parent.id);
        parent_view.insertBefore(this.label, parent_view.firstChild);
    }
    init(string) { 
        this.label.innerText = string
    }
}



class List {
    constructor(parent, title) {
        this.parent = parent;
        this.id;
        this.item;
        this.columns = title.length;
        this.screen = document.createElement("div")
        this.screen.setAttribute("class", "default-list-screen")

        this.list = document.createElement('table');
        this.list.setAttribute('class', 'default-list')
        this.row = this.list.insertRow()
        for (let j = 0; j < this.columns; j++) {
            this.cell = this.row.insertCell()
            this.cell.appendChild(document.createTextNode(title[j]))
            this.cell.setAttribute("class", "list-title")
        }
        this.screen.appendChild(this.list)
    }
    last(){
        this.screen.setAttribute("id", this.id);
        let parent_view = document.getElementById(this.parent.id);
        parent_view.appendChild(this.screen);
    }
    next(element){
        this.screen.setAttribute("id", this.id);
        let parent_view = document.getElementById(this.parent.id);
        parent_view.insertBefore(this.screen, element.nextSibling);
    }
    first(){
        this.screen.setAttribute("id", this.id);
        let parent_view = document.getElementById(this.parent.id);
        parent_view.insertBefore(this.screen, parent_view.firstChild);
    }
    add(data){
        this.item = this.list.insertRow();
        this.item.setAttribute("class", "list-item")
        this.item.setAttribute("id", Math.random().toString(32).substring(2))
        for (let i = 0; i < data.length; i++) {
            this.cell = this.item.insertCell()
            this.cell.appendChild(document.createTextNode(data[i]))
        }
    }
    clear(){
        while (this.list.rows.length > 1) this.list.deleteRow(-1);
    }
   
}

class Menu{
    constructor(parent, text, position){
        this.parent = parent;
        this.menuScreen = document.createElement("div");
        this.menu = document.createElement("table");
        this.closeButton;
        if (position === "left") {
            this.menuScreen.setAttribute("class", "default-menu-left");
        } else if (position == "center") {
            this.menuScreen.setAttribute("class", "default-menu-float");
            this.closeButton = document.createElement("a")
            this.closeButton.innerText = "閉じる"
            this.closeButton.setAttribute("class", "default-close-button");
            this.closeButton.setAttribute("onclick", "javascript:this.parentNode.style.display='none';")
            this.menuScreen.appendChild(this.closeButton);
        }
        for (let i = 0; i < text.length; i++) {
            this.row = this.menu.insertRow()
            this.cell = this.row.insertCell();
            this.cell.appendChild(document.createTextNode(text[i]));
            this.cell.setAttribute("class", "default-menu-item");
        }
        this.menuScreen.appendChild(this.menu);
        document.getElementById(this.parent.id).appendChild(this.menuScreen);
    }
} // text = ["xxx", "xxx"] 


class Frame {
    constructor(parent, id) {
        this.parent = parent;
        this.frame = document.createElement("div");
        this.frame.setAttribute("class", "default-frame");
        this.id = id;
    }
    
    switch(target){
        this.frame.style.display = "hidden";
        target.style.display = "block";
    }
    next(element) {
        this.frame.setAttribute('id', this.id);

        let parent_view = document.getElementById(this.parent.id);
        parent_view.insertBefore(this.frame, element.nextSibling);
    }
    first(){
        this.frame.setAttribute('id', this.id);
        let parent_view = document.getElementById(this.parent.id);
        parent_view.insertBefore(this.frame, parent_view.firstChild);
    }
    last(){
        this.frame.setAttribute("id", this.id);
        let parent_view = document.getElementById(this.parent.id);
        parent_view.appendChild(this.frame);
    } 
}

class Dialog {
    constructor(parent, id){
        this.parent = parent;
        this.dialog = document.createElement("div");
        this.dialog.setAttribute("class", "default-dialog")
        this.closeButton = document.createElement("a")
        this.closeButton.innerText = "閉じる"
        this.closeButton.setAttribute("class", "default-close-button");
        this.dialog.setAttribute("id", id);
        this.closeButton.setAttribute("onclick", "javascript:this.parentNode.style.display='none';")
        this.dialog.appendChild(this.closeButton);
        this.dialog.style.display = "none";
        document.getElementById(this.parent.id).appendChild(this.dialog);
    }

}

class TextEditor {
    constructor(parent){
        this.parent = parent;
        this.editor = document.createElement("textarea");
        this.editor.setAttribute("class", "default-TextEditor");
        this.id;
        this.text;
    }
    next(element) {
        this.editor .setAttribute('id', this.id);
        this.editor.setAttribute("placeholder", this.text);
        let parent_view = document.getElementById(this.parent.id);
        parent_view.insertBefore(this.editor, element.nextSibling);
    }
    first(){
        this.editor.setAttribute('id', this.id);
        this.editor.setAttribute("placeholder", this.text);
        let parent_view = document.getElementById(this.parent.id);
        parent_view.insertBefore(this.editor, parent_view.firstChild);
    }
    last(){
        this.editor.setAttribute("id", this.id);
        let parent_view = document.getElementById(this.parent.id);
        this.editor.setAttribute("placeholder", this.text);
        parent_view.appendChild(this.editor);
    } 
    getValue(){
        return this.editor.value;
    }
    setValue(text){
        this.editor.value = text;
    }
}

class LoadingView {
    constructor(parent){
        this.parent = parent;
        this.screen = document.createElement("div");
        this.screen.setAttribute("class", "default-loading-screen");
        this.id;
        this.view = document.createElement("div");
        this.view.setAttribute("class", "default-loading-view");
        this.screen.appendChild(this.view);
        this.screen.style.display = "none"
    }
    last(){
        let parentView = document.getElementById(this.parent.id);
        parentView.appendChild(this.screen);
    }
    show(){
        this.screen.style.display = "block";
    }
    hidden(){
        this.screen.style.display = "none";
    }

}








//function
//function selected(id){
//  return document.getElementById(id)
//}