//1)Ask user for miles driven(prompt)
//2)Ask user for gallons of gas used(prompt)
//3) display in console the mpg

var milesDriven = window.prompt("Enter miles driven:");
var gallonsUsed = window.prompt("Enter gallons used:");

milesDriven = parseFloat(milesDriven); // convert the string into a numeric information
gallonsUsed = parseFloat(gallonsUsed);

let mpg = milesDriven / gallonsUsed;

mpg = parseInt(mpg, 10); //convert a string to a number but if it is not a string it will convert it to a string
console.log(`Your miles per gallon are ${mpg}`);
