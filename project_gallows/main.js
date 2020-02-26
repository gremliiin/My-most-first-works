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
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess.toLowerCase()) {
                answerArray[j] = guess.toLowerCase();
                remainingLetters--;
            }
            
        }
        for (let k = 0; k < word.length; k++){
            if(answerArray[k] === "_"){
                checkUnderscore = true;
                break;
            } else {
                checkUnderscore = false;
            }
        }

        countTry--;
        if(countTry === 0){
            alert("У вас закончились попытки! Вы проиграли");
            checkWin = false;
            break;
        }
        console.log(word);
    }
}

if(checkWin === true){
    alert("Вы выйграли: " + answerArray.join(" "));
    alert("Было загадано слово " + word);
} else if (checkWin === false){
    alert("Было загадано слово " + word);
}