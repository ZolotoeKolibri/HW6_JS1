function Figure(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

function Line(x1, y1, x2, y2, color) {
    Figure.call(this, x1, y1, color);
    this.x2 = x2;
    this.y2 = y2;
    this.draw = function (ctx){
        ctx.fillStyle = this.color;
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
    }
}

function Circle(x, y , r, color) {
    Figure.call(this, x,y,color);
    this.r = r;
    this.draw = function (ctx){
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r,  0, 2 * Math.PI)
    }

}

function Rect(x,y, w, h, color) {
    Figure.call(this, x, y, color);
    this.w = w;
    this.h = h;
    this.draw = function (ctx){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}

let line = new Line(0, 0, 200, 250, 'red'); // x1, y1, x2, y2, color
let circle = new Circle(50, 50, 20, 'green'); // x, y, r, color
let rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color

function Canvas(figure){
    let canvas = document.getElementById("canvas");
    this.figure = figure;
    let ctx = canvas.getContext("2d");
    this.draw = function (){
        figure.draw(ctx)
    }
}

let drw = new Canvas(circle)
drw.draw()



