/*
UC1--Check Weather Employee is present or Absent

const IS_ABSENT=0;

let empCheck = Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT)
{
    console.log("Employee is Absent");
}
else
{
    console.log("Employee is Present");
}
*/

/*
UC2--Employee Daily Wage Calculation

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random()*10)%3;
switch(empCheck) {
    case IS_PART_TIME:
    console.log("Employee is Part time");
    empHrs=PART_TIME_HOURS;
    break;
    case IS_FULL_TIME: 
    console.log("Employee is Full time");
    empHrs=FULL_TIME_HOURS;
    break;
    default:
        console.log("Employee is Absent");
        empHrs=0;
}

let empWage = empHrs*WAGE_PER_HOUR;
console.log("Emp Wage: "+empWage);
*/

/*
UC3--Code Refactor

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck){
    switch(empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
    }
}

let empHrs=0;
let empCheck=Math.floor(Math.random()*10)%3;
empHrs=getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage "+empWage);
*/

/*
UC4 Calculating wages for a month

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

const NUM_OF_WORKING_DAYS=20;
function getWorkingHours(empCheck){
    switch(empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
    }
}

let empHrs=0;
for(let day = 0; day<NUM_OF_WORKING_DAYS;day++){
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs :" +empHrs + " " + "Emp Wage "+empWage);   
*/
//UC5 --Wage Calculation for working hours 160 and days 20

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

const MAX_HRS_IN_MONTH=160;
const NUM_OF_WORKING_DAYS=20;

let totalEmpHrs=0;
let totalWorkingDays=0;

function getWorkingHours(empCheck){
    switch(empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
    }
}

while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    totalEmpHrs += getWorkingHours(empCheck);
}

let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC-Total Days: "+totalWorkingDays + " " + " Total Hrs: " + " "+ totalEmpHrs + " " + " Emp wage: "+empWage);