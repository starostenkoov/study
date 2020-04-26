var money;
var time;
var money = +prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");
var appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses: {},
    income: [],
    savings: false,

};

var obligatoryExpenses = prompt("Введите обязательную статью расходов в этом месяце");
var cost = prompt("Во сколько обойдется?");

appData.expenses[obligatoryExpenses] = cost;

var day1 = (money-cost)/30;
alert("Ваш бюджет на 1 день равен  " + day1);

