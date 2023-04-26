/*
1) gather 3 scores from user
2) add the scores together
3) calculate the average
4) display results in document
*/

function calcAverageScore(scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i]; //total = total + scores[i]
    document.write(
      "The score " + (i + 1) + " was " + String(scores[i]) + "<br>"
    );
  }
  let average = parseInt(total / scores.length, 10);
  document.write("The average score was: " + String(average));
  return average;
}

let scores = [];
for (let i = 0; i < 3; i++) {
  let entry = window.prompt("Enter test score " + (i + 1));
  scores.push(parseInt(entry, 10)); // push add elements to the end of array
}

calcAverageScore(scores);
