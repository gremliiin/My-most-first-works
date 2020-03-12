let Car= function(x, y){
    this.x = x;
    this.y = y;
};

let DrawCar = function (car) {
    let carHtml = '<img src="http://nostarch.com/images/car.png">';
    let carElement = $(carHtml);

    carElement.css({
        position: "absolute",
        left: car.x,
        top: car.y,
    });

    $("body").append(carElement);
};

let Nissan = new Car(20, 20);
let Tesla = new Car(100, 200);

DrawCar(Nissan);
DrawCar(Tesla);