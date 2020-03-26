let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
let speeds = {
    97: 5,
    98: 6,
    99: 7,
    100: 8,
    101: 9,
    102: 10,
    103: 11,
    104: 12,
    105: 13,
};

let circle = function (x, y, radius, fillCircle) {
    this.radius = radius;
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

let Ball = function () {
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = 5;
    this.ySpeed = 0;
    this.speed = 5;
    this.radius = 10;
};

Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x < 0) {
        this.xSpeed = -this.xSpeed;
    } else if (this.x > width) {
        this.xSpeed = -this.xSpeed;
    } else if (this.y < 0) {
        this.ySpeed = -this.ySpeed;
    } else if (this.y > height) {
        this.ySpeed = -this.ySpeed;
    }
};

Ball.prototype.draw = function (sizeRadius) {
    
    if (sizeRadius === "sizeLess") { 
        this.radius--;
    } else if (sizeRadius === "sizeMore") {
        this.radius++;
    }

    if (this.radius < 2){
        this.radius = 2;
    } else if (this.radius > 30){
        this.radius = 30;
    }
    circle(this.x, this.y, this.radius, true);
};

Ball.prototype.setDirection = function (direction, speed) {
    if (speed != undefined) {
        this.speed = speed;
    }
    if (direction === "up") {
        this.xSpeed = 0;
        this.ySpeed = -this.speed;
    } else if (direction === "down") {
        this.xSpeed = 0;
        this.ySpeed = this.speed;
    } else if (direction === "left") {
        this.xSpeed = -this.speed;
        this.ySpeed = 0;
    } else if (direction === "right") {
        this.xSpeed = this.speed;
        this.ySpeed = 0;
    } else if (direction === "stop") {
        this.xSpeed = 0;
        this.ySpeed = 0;
    } else if (direction === "speedLess") {
        this.speed--;
    } else if (direction === "speedMore") {
        this.speed++;
    }

    if (this.speed < 0) {
        this.speed = 0;
    } else if (this.speed > 13) {
        this.speed = 13;
    }
};


let ball = new Ball();

let keyActions = {
    32: "stop",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    90: "speedLess",
    88: "speedMore",
    67: "sizeLess",
    86: "sizeMore",
};

$("body").keydown(function (event) {
    let direction = keyActions[event.keyCode];
    let speed = speeds[event.keyCode];
    ball.setDirection(direction, speed);
    ball.draw(direction);


});

setInterval(function () {
    ctx.clearRect(0, 0, width, height);
    ball.draw();
    ball.move();
    ctx.strokeRect(0, 0, width, height);
}, 30);
