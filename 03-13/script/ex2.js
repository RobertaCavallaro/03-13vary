/*
1) gather 3 scores from user
2) add the scores together
3) calculate the average
4) display results in document
*/

//Global variables
let entry;
let average;
let score1;
let score2;
let score3;
let total = 0; //default value

//Get scores from user
entry = window.prompt("Enter test score 1:");
score1 = parseInt(entry, 10); //parseint and ,10 means round it to a whole number
total += score1; // total= total + score1

entry = window.prompt("Enter test score 2:");
score2 = parseInt(entry, 10); //parseint and ,10 means round it to a whole number
total += score2; // total= total + score1

entry = window.prompt("Enter test score 3:");
score3 = parseInt(entry, 10); //parseint and ,10 means round it to a whole number
total += score3; // total= total + score1

//calculate the average
average = parseInt(total / 3, 10);
console.log(average);

//display results
document.write(" '<p>The first score was: " + String(score1) + "<br>");
document.write("The second score was: " + String(score2) + "<br>");
document.write("The third score was: " + String(score3) + "<br>");
document.write("The average score is: " + String(average) + "</p>");
