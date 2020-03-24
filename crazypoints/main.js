let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let drawPoints = function (x, y) {
    ctx.lineWidth = 4;
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2, false);
    ctx.fill();
};

$("#canvas").mousemove(function(event){
    drawPoints((event.pageX - 180), event.pageY - 17);
});

$("#refresh").click(function(){
    location.reload();
});