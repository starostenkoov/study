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
    chooseExpences: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Низкий уровень достатка");
       } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
           console.log("Средний уровень достатка");
       } else if (appData.moneyPerDay > 2000) {
           console.log("Высокий уровень достатка");
       } else {
           console.log("Произошла ошибка");
       }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.mohthIncome = (save/100/12*percent).toFixed(1);
            alert("Доход в месяц с Вашего депозита: " + appData.mohthIncome);
        }
    },
    chooseOptExpences: function () {
        for (i = 0; i < 3; i++) {

            let optExpences = prompt("Статья необязательных расходов?", "");   
            
            if (typeof(optExpences) === "string" && optExpences != ""  && optExpences.length < 50) {
               appData.optionalExpenses[i+1] = optExpences;
            } else {
                i--;
            } 
        } 
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через зыпятую)", "");
        if (typeof(items) === "string" && items != "" && items != null ) {
            appData.income = items.split(", ");
        } else {
            console.log("Ошибка");
        }
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
        appData.income.forEach( function (item, i) {
            alert("Способы получения дополнительного заработка: " + (i+1) + ") " + item + " .");
        });
    },
};

for (var key in appData) {
    console.log("Наша программа включает в себя данные:" + key + appData[key]);
}











