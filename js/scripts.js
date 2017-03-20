var gallon = parseFloat(prompt("How many gallons do you have?"));
var gallonsToLiters = function(gallons) {
return gallons*3.78541;
};

var answer = gallonsToLiters(gallon);
alert("The conversion from gallons to liters is: " + answer);
// var celsius = parseFloat(prompt("What is the temperature in Celsius?"));
// var fahrenheit = parseFloat(prompt("What is the temperature in Fahrenheit?"));
//
// var conversionFC = function(fahrenheitInput) {
// return (fahrenheitInput -32) *5 /9;
// }
//
// var conversionCF = function(celsiusInput) {
// return celsiusInput*9 /5 +32;
// }
//
// var answer = conversionFC(fahrenheit);
// alert("The conversion from Fahrenheit to Celsius is: " + answer);
//
// var answer2 = conversionCF(celsius);
// alert("The conversion from Celsius to Fahrenheit is: " + answer2);
