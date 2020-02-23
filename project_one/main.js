
let money,
    time;

money = +prompt("Ваш бюджет на месяц?",0);
time = +prompt("Введите дату в формате YYYY-MM-DD",0);

let appData = {
    budget: money,
    timeData: time,
    savings: false,
};

let questionOne = prompt("Введите обязательную статью расходов в этом месяце",""),
    questionTwo = prompt("Во сколько обойдется?");


let expenses = {
    questionOne: questionTwo,
    savings: false,
};

let optionalExpenses = {
    savings: false,
};

let income = [];

console.log('Бюджет на 1 день: ');

