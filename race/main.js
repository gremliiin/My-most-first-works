let Car= function(x, y){
    this.x = x;
    this.y = y;

};

Car.prototype.draw = function (car) {
    let carHtml = '<img src="http://nostarch.com/images/car.png">';
    this.carElement = $(carHtml);

    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y,
    });

    $("body").append(this.carElement);
};

Car.prototype.moveRight = function (speed){
    speed = Math.floor(Math.random () * 9);
    this.x += speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    });
    
    if (this.x > 1000){
        this.x = 20;
    }
    
   
};



let nissan = new Car(20, 20);
let tesla = new Car(20, 200);
nissan.draw();
tesla.draw();


setInterval(function (){
    nissan.moveRight();
}, 30);

setInterval(function (){
    tesla.moveRight();
}, 30);




