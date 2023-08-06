
const btnSend = document.getElementById("btn-submit");
let days = document.getElementById("days-el");
let months = document.getElementById("months-el");
let years = document.getElementById("years-el");
const yearsTitle = document.getElementById("years-result");
const monthsTitle = document.getElementById("months-result");
const daysTitle = document.getElementById("days-result");
const dayContainer = document.querySelector('.days')

const getDays = function(year, month){
    return new Date(year, month, 0).getDate();
}


btnSend.addEventListener("click", function(e){
    
    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    let currentDay = currentTime.getDate();
    var currentMonth = currentTime.getMonth() + 1;
    let monthInput = parseFloat(months.value);
    let daysInMonths = getDays(currentYear, monthInput);
    let dayResult = currentDay + (daysInMonths * monthInput ) + parseFloat(days.value);
    let monthsResult = 12 - months.value;
    let yearsResult =  (currentYear - years.value);
    let messages = []

    let errorElement = document.querySelector('.error')

    if(days.value == 0 || days.value > 31  && months.value == 0 || months.value > 12 && years.value == 0 || years.value > currentYear){
        messages.push('Must enter valid input')
    }

    else if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

    
    else{
        yearsTitle.innerHTML = `
            <span class="year-span-design">${yearsResult}</span>
            <span class="date-info">years</span>
            `
        monthsTitle.innerHTML = `
            <span class="year-span-design">${monthsResult}</span> 
            <span class="date-info">months</span>
            `
        daysTitle.innerHTML = `
            <span class="year-span-design">${dayResult}</span>
            <span class="date-info">days</span>
            `
    }

    years.value = "";
    months.value = "";
    days.value = "";
    
    // console.log(daysInMonths)
    // console.log(dayResult)
})


    // if(monthInput === 1){
    //     console.log(daysInMonths - parseFloat(days.value) + currentDay + " January")
    // }
    // else if(monthInput === 2){
    //     console.log(daysInMonths + " Febuary")
    // }
    // else if(monthInput === 3){
    //     console.log(daysInMonths + " March")
    // }
    // else if(monthInput === 4){
    //     console.log(daysInMonths + " April")
    // }
    // else if(monthInput === 5){
    //     console.log(daysInMonths + " May")
    // }
    // else if(monthInput === 6){
    //     console.log(daysInMonths + " June")
    // }
    // else if(monthInput === 7){
    //     console.log(daysInMonths + " July")
    // }
    // else if(monthInput === 8 ){
    //     console.log(daysInMonths + " August")
    // }
    // else if(monthInput === 9){
    //     console.log(daysInMonths + " September")
    // }
    // else if(monthInput === 10){
    //     console.log(daysInMonths + " October")
    // }
    // else if(monthInput === 11){
    //     console.log(daysInMonths + " November")
    // }
    // else if(monthInput === 12){
    //     console.log(daysInMonths + " December")
    // } else{
    //     console.log("There's a bug")
    // }

