function $(id) {
    return document.getElementById(id);
}
class frame {
    constructor(id, open, close) {
        this.id = id;
        if (open != undefined) {
            this.open = open;
        }
        if (close != undefined) {
            this.close = close;
        }
    }
    get html() {
        return document.getElementById(this.id);
    }
    open() {
        $(this.id).style.display = "block";
    }
    close() {
        $(this.id).style.display = "none";
    }
}
var frames = [new frame("fail"), new frame("f1")];
var current = 0;
function lose() {
    frames[0].open();
    frames[current].close();
}
function next() {

}