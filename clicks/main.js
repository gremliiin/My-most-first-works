let leftOffset = 0;
let topOffset = 0;
let leftOffsetMin = 200;
let topOffsetMin = 200;
let moveElement = function () {
    $("h1").offset({
        left: leftOffset
    });

    leftOffset++;

    if (leftOffset > 200) {
        leftOffset = 200;

        $("h1").offset({
            top: topOffset
        });

        topOffset++;

        if (topOffset > 200) {
            topOffset = 200;

            $("h1").offset({
                left: leftOffsetMin
            });

            leftOffsetMin--;

            if (leftOffsetMin < 0) {
                leftOffsetMin = 0;

                $("h1").offset({
                    top: topOffsetMin
                });

                topOffsetMin--;
            }
        }
    }
    if (leftOffset === 200 && topOffset === 200 && leftOffsetMin === 0 && topOffsetMin === 0) {
        leftOffset = 0;
        topOffset = 0;
        leftOffsetMin = 200;
        topOffsetMin = 200;
    }
};

let intervalLength = 30;
let clicks = 0;
let intervalId;

$("h1").click(function () {
    clearInterval(intervalId);
    intervalLength /= 2;
    clicks++;
    console.log(intervalLength);



    if (clicks > 10) {
        $("h1").text("Вы победили!");

    } else {
        intervalId = setInterval(moveElement, intervalLength);
        $("h1").text(clicks);
    }
});