/*
1) gather 3 scores from user
2) add the scores together
3) calculate the average
4) display results in document
*/

function calcAverageScore(score1, score2, score3) {
  let total = score1 + score2 + score3;
  let average = parseInt(total / 3, 10);

  //display results
  document.write(" '<p>The first score was: " + String(score1) + "<br>");
  document.write("The second score was: " + String(score2) + "<br>");
  document.write("The third score was: " + String(score3) + "<br>");
  document.write("The average score is: " + String(average) + "</p>");

  return average;
}

//Get scores from user
let entry = window.prompt("Enter test score 1:");
let score1 = parseInt(entry, 10); //parseint and ,10 means round it to a whole number

entry = window.prompt("Enter test score 2:");
let score2 = parseInt(entry, 10); //parseint and ,10 means round it to a whole number

entry = window.prompt("Enter test score 3:");
let score3 = parseInt(entry, 10); //parseint and ,10 means round it to a whole number

calcAverageScore(score1, score2, score3);
