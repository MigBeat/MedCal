let isabove40 = false;
let isbelow40 = false;
let firstclassAbove40 = false;
let firstclassBelow40 = false;
let secondclassAbove40 = false;
let secondclassBelow40 = false;
let thirdclassAbove40 = false;
let thirdclassBelow40 = false;
let month;
let year;

function aboveAction(){
    isabove40 = true
    isbelow40 = false
}

function belowAction(){
    isbelow40 = true
    isabove40 = false
}

function firstclassAction(){
    if(isabove40){
        firstclassAbove40 = true
    }
    if(isbelow40){
        firstclassBelow40 = true
    } 
}

function secondclassAction(){
    if(isabove40){
        secondclassAbove40 = true
    }
    if(isbelow40){
        secondclassBelow40 = true
    }
}

function thirdclassAction(){
    if(isabove40){
        thirdclassAbove40 = true
    }
    if(isbelow40){
        thirdclassBelow40 = true
    }
}

function calculateMonth(){
    month = document.getElementById("monthInput").value;
    if(firstclassAbove40){
        (parseInt(month) + 6)
    }
    if(firstclassBelow40){
        month
    }
}

function showValues(year){
    valueBox.innerText = year
}

function calculateYear(){
    year = document.getElementById("yearInput").value;
    if(firstclassAbove40){
        if(month <= 6){
            let lessThan6 = `You have until ${parseInt(month) + 6}/31/${year} before your medical drops to a second class, then you have until ${month}/31/${parseInt(year) + 1} to renew it before it drops to a 3rd class medical; Your medical will then fully expire on ${month}/31/${parseInt(year) + 2}`
            showValues(lessThan6);
        }
        else if(month > 6){
            let greaterThan6 = `You have until ${parseInt(month) - 6}/31/${parseInt(year) + 1} before your medical drops to a second class, then you have until ${month}/31/${parseInt(year) + 1} to renew it before it drops to a 3rd class medical; Your medical fully expires on ${month}/31/${parseInt(year) + 2}`
            showValues(greaterThan6);
        }
    }
    if (firstclassBelow40){
        let firstBelow40 = `You have until ${month}/31/${parseInt(year) + 1} to get your medical renewed before it reverts to a 3rd class; You have until ${month}/31/${parseInt(year) + 5} before it expires`;
        showValues(firstBelow40);
    }
    if (secondclassAbove40){
        let secondAbove40 = `You have until ${month}/31/${parseInt(year) + 1} until your medical reverts to the priviledges of a 3rd class; You have until ${month}/31/${parseInt(year) + 2 } before it expires`;
        showValues(secondAbove40);
    }
    if (secondclassBelow40){
        let secondBelow40 = `You have until ${month}/31/${parseInt(year) + 1} until your medical reverts to the priviledges of a 3rd class; You have until ${month}/31/${parseInt(year) + 5} before it expires`;
        showValues(secondBelow40);
    }
    if (thirdclassAbove40){
        let thirdAbove40 = `You have until ${month}/31/${parseInt(year) + 2} to get your medical renewed`;
        showValues(thirdAbove40);
    }
    if (thirdclassBelow40){
        let thirdBelow40 = `You have until ${month}/31/${parseInt(year) + 5} to get your medical renewed`;
        showValues(thirdBelow40);
    }
}

function calculateDate(){
    calculateMonth()
    calculateYear()
}
