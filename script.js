' use strict ';

let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while ( isNaN (money) || money == null || money == "") {
        money = +prompt("Ваш бюджет на месяц?");
    }
    while ( time ==null || time == "") {
        time = prompt("Введите дату в формате YYYY-MM-DD");
    }
}
start();



let appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income: [],
    savings: true,
    ChooseExpenses: function(){
        let obyaz = +prompt("Сколько обязательных трат у вас в месяц?", '');
        for (let i= 0; i < obyaz; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце" , ''),
                b = +prompt("Во сколько обойдется?", '');
            if( (typeof (a)) === 'string' && a != null && a != "" &&
                b !=null && b !=""){
                    appData.expenses[a] = b;
                    console.log(a, ": " , b);
                    console.log (`${appData.budget} -  ${b}  =  ${appData.budget - appData.expenses[a]}`);
                    appData.budget = appData.budget - appData.expenses[a];
            }
            else {
                i--;
            }
            
        }
    },
    dopTrat: function(){
        let dop = prompt("сколько у вас необязательных трат в этом месяце?", '');
        for ( let i = 0; i < dop; i++){
            let dopText = prompt(" На что вы хотите потратить деньги?" , ''),
                dopcost = +prompt(" Сколько вы потратите?" , '');
            if( typeof(dopText) === 'string' && dopText !=null && dopText != ""  && dopcost !=null && dopcost != ""){
                appData.optionalExpenses[dopText]= dopcost;
                console.log(` доп трата: ${dopText} : ${dopcost}`);
                appData.budget = appData.budget - appData.optionalExpenses[dopText];
                console.log(`${appData.budget} = ${appData.budget} - ${appData.optionalExpenses[dopText]} `);
            }else{
                i--;
            }
        }
        appData.budgetDay = +(appData.budget / 30).toFixed(1);
    },
    checkSavings: function(){
        if(appData.savings == true){
            let sum = +prompt("Какая сумма у вас в банке?" , ' '),
                percent = +prompt("Под какой процент?" , ' ');
            appData.sumMonth = sum/100/12 * percent;
        }
        
        alert(`Сумма от банка в месяц = ${appData.sumMonth}`);
        appData.fullbudget = appData.budgetDay + appData.sumMonth;
    },
    moneyStatus: function(){
        if (appData.fullbudget < 1){
            alert("У вас нет свободных денг) Вы в минусе на " + appData.fullbudget);
        }
        else{
            alert( 'Ваш бюджет на день составляет: ' +appData.fullbudget);
        }
    },
    levelMoney: function(){
        if(appData.fullbudget < 100){
            alert("Ваш уровень дсотатка - бедный");
        } else if(appData.fullbudget > 100 && appData.fullbudget < 2000){
            alert("У вас средний  уровень дсотатка");
        }else if( appData.fullbudget > 2000){
            alert("У вас высокий  уровень дсотатка");
        }
    },
    ChooseIncome: function(){
        let  kolDopMoney = +prompt("Сколько у вас источников доп дохода?", ' ');
        if (kolDopMoney != 0 && typeof(kolDopMoney) == 'number' && kolDopMoney != ' ') {
            let dopMoney = prompt("Какие еще источники дохода у вас имеются? (Перечислите через запятую)", ' ');
            if(typeof(dopMoney) == 'string' && typeof(dopMoney) != null && dopMoney != " "){
                appData.income = dopMoney.split(', ');
                appData.income.sort();
            }
            else{
                i--;
            }
        }
        else{
            appData.income = null;
        }
    }

};




// appData.ChooseExpenses();


// appData.dopTrat();



// appData.checkSavings();



// appData.moneyStatus();

// appData.levelMoney();

appData.ChooseIncome();

appData.income.forEach(function(itemmassie, i){
    alert("Способы доп. заработка: " + (i+1) +"-" + itemmassie ); 
})

