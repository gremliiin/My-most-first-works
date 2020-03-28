let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let words = [
        "программа",
        "рустам",
        "панацея",
        "язык",
        "гугл",
        "даня",
        "бауыржан",
        "говновоз",
        "понос",
        "путин",
        "навальный",
    ],
    word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];

for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
let checkUnderscore = true;
let countTry = 15;
let checkWin = true;
let countX = 50;
let countY = 80;

let drawAnswerArray = function (x, y) {
    ctx.fillStyle = "Black";
    ctx.font = "24px Courier";
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    ctx.fillText(answerArray.join(" "), x, y);
};

drawAnswerArray(50, 51);

 while (remainingLetters > 0 || checkUnderscore === true) {
    alert(answerArray.join(" "));
    let guess = prompt("Угадайте букву или нажмите 'Отмена' для выхода\n У вас есть 15 попыток ", "");

    if (guess === null) {
        alert("Вы вышли из игры");
        checkWin = false;
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите только одну букву");
    } else {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess.toLowerCase()) {
                answerArray[i] = guess.toLowerCase();
                remainingLetters--;
                
            }

        }
        for (let j = 0; j < word.length; j++) {
            if (answerArray[j] === "_") {
                checkUnderscore = true;
                break;
            } else {
                checkUnderscore = false;
            }
        }

        countTry--;
        if (countTry === 0) {
            alert("У вас закончились попытки! Вы проиграли");
            checkWin = false;
            break;
        }
    }
}

if (checkWin === true) {
    alert("Вы выйграли: " + answerArray.join(" "));
    alert("Было загадано слово " + word);
} else if (checkWin === false) {
    alert("Было загадано слово " + word);
} 

drawAnswerArray(50, 50); 