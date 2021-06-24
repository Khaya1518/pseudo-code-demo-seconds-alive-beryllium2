let birthMonth = prompt("what is your month of birth? Please provide the number of the month. ex: Enter 1 for January, and for June, enter 6")
let birthYear = prompt("What is your year of birth? Please provide the number of the year. ex: enter 1995")

let currentMonth = new Date().getMonth() + 1
let currentYear = new Date().getFullYear()

let secondsInMonth = 60 * 60 * 24 * 30
let secondsInYear = secondsInMonth * 12

let secondsInBirthYear = secondsInMonth * (12 - birthMonth)

let secondsInCurrentYear = secondsInMonth * currentMonth
let secondsInBetween = secondsInYear * (currentYear - birthYear - 2)

let result = secondsInBirthYear + secondsInBetween + secondsInCurrentYear
 document.write(`<h3>Are you ready?</h3>
    <details>
        <summary>Given the birth month (${birthMonth}) and the birth year(${birthYear}) you have have been alive for... 
            </summary> ....Approximately ${result.toLocaleString()} seconds!
        </details>
 `)


 