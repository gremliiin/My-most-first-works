let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
 var mysteryPoints = [
    [50, 50],
    [50, 100],
    [25, 120],
    [100, 50],
    [70, 90],
    [100, 90],
    [70, 120]
]; 

let drawPoints = function (points) {
    let count = 0;
    let countArray = 1;
    
    while (count <= points.length) {

        ctx.lineWidth = 4;
        ctx.fillStyle = "Black";
        ctx.beginPath();
        ctx.arc(points[count][0], points[count][1], 5, 0, Math.PI * 2, false);
        ctx.fill();

        if (count === (points.length - 1)){
            break;
        }

        ctx.strokeStyle = "black";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(points[count][0], points[count][1]);
        ctx.lineTo(points[count + countArray][0], points[count + countArray][1]);
        ctx.stroke();

        count++;
        
    }
};

drawPoints(mysteryPoints);