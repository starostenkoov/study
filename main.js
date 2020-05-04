let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD","");

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses: {},
    income: [],
    savings: true,

};

function chooseExpences() {
    for (i = 0; i < 2; i++) {
   
        let a = prompt("Введите обязательную статью расходов в этом месяце",""),
            b = prompt("Во сколько обойдется?","");
    
            if ( (typeof(a)) === "string" && (typeof (a)) != null && (typeof (b)) != null 
                && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b; 
            } else {
                i--;         
            }      
    }
}
chooseExpences();

function chooseOptExpences() {
    for (i = 0; i < 3; i++) {

        let optExpences = prompt("Статья необязательных расходов?", "");

        
        if (typeof(optExpences) === "string" && optExpences != ""  && optExpences.length < 50) {
           appData.optionalExpenses[i+1] = optExpences;
        } else {
            i--;
        }
           
    } 
   
}
chooseOptExpences();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay + "руб.");
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Низкий уровень достатка");
   } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
       console.log("Средний уровень достатка");
   } else if (appData.moneyPerDay > 2000) {
       console.log("Высокий уровень достатка");
   } else {
       console.log("Произошла ошибка");
   }
}
detectLevel();



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.mohthIncome = (save/100/12*percent).toFixed(1);
        alert("Доход в месяц с Вашего депозита: " + appData.mohthIncome);
    }
}
checkSavings();