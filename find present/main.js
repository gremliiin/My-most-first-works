let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

let getDistance = function (event, target) {
    let diffx = event.offsetX - target.x;
    let diffy = event.offsetY - target.y;
    return Math.sqrt((diffx * diffx) + (diffy * diffy));
};

let getDistanceHint = function (distance) {
    if (distance < 30) {
        return "Очень горячо";
    } else if (distance < 60) {
        return "Горячо";
    } else if (distance < 120) {
        return "Тепло";
    } else if (distance < 240) {
        return "Холодно";
    } else if (distance < 480) {
        return "Очень холодно";
    } else {
        return "Замерзнешь!";
    }
};

let width = 500;
let height = 500;
let clicks = 0;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};


$("#map").click(function (event) {
        clicks++;
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    $("#distance").text(distanceHint);
    if (distance < 15) {
        alert("Клад найден! Сделано кликов: " + clicks);
        location.reload();
    }

    if (clicks >= 50) {
        alert("Вы проиграли");
        location.reload();
    }

    $("#clicks").text("Попыток осталось: " + (50 - clicks) );


});