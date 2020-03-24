let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


let circle = function (lineWidth, strokecolor, fillcolor, x, y, radius, bool) {
    ctx.lineWidth = lineWidth;
    if (bool === true) {
        ctx.strokeStyle = strokecolor;
    } else if (bool === false) {
        ctx.fillStyle = fillcolor;
    }
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (bool === true) {
        ctx.stroke();
    } else if (bool === false) {
        ctx.fill();
    }
};

let drawSnowman = function (x, y) {
    circle(4, "black", "", x, y, 25, true);
    circle(4, "", "black", (x - 10), (y - 5), 5, false);
    circle(4, "", "black", (x + 10), (y - 5), 5, false);
    circle(4, "", "#F08329", (x + 0), (y + 5), 5, false);
    circle(4, "black", "", x, (y + 65), 40, true);
    circle(4, "", "black", x, (y + 45), 5, false);
    circle(4, "", "black", x, (y + 65), 5, false);
    circle(4, "", "black", x, (y + 85), 5, false);
};


$("#refresh").click(function(){
    location.reload();
});

$("body").click(function (event) {
    drawSnowman((event.pageX - 180), (event.pageY - 45));
});