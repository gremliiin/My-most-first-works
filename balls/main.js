let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
let balls = [];
let colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

let Ball = function () {
    this.x = (width / Math.floor(Math.random() * 10));
    this.y = (height / Math.floor(Math.random()* 10));
    this.xSpeed = Math.floor(Math.random() * -6);
    this.ySpeed = Math.floor(Math.random() * 5);
    this.color = colors[Math.floor(Math.random() * 5)];
};

let circle = function (x, y, radius, fillCircle, fillColor) {
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};



Ball.prototype.draw = function () {
    circle(this.x, this.y, 3, true, this.color);
};

Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function () {
    if (this.x < 0 || this.x > width) {
        this.xSpeed = -this.xSpeed;
    }

    if (this.y < 0 || this.y > height) {
        this.ySpeed = -this.ySpeed;
    }
};

for (let i = 0; i <= 30; i++) {
    balls[i] = new Ball();
}

setInterval(function () {
    ctx.clearRect(0, 0, width, height);
        
    for (let i = 0; i <= 30; i++) {
        balls[i].draw();
        balls[i].move();
        balls[i].checkCollision();
    }
}, 30);