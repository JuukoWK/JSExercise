// Lab1(JavaScript Variables)
//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the console like so: "You will be a X in Y, making $N for Z."

let jobTitle = "CEO";

let geographicLocation ="New York";

let annualSalary = 50000;

let companyName = "SanDisk";

console.log(`You will be a ${jobTitle} in ${geographicLocation}, making ${annualSalary} for ${companyName}`);


//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

let currentYear = 2020;

let birthYear = 1992;

console.log(`They are ${currentYear - birthYear} years old.`);

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let currentAge = 27;

let maximumAge = 100;

let estimatedAmount = 3;

let totalNeeded = (estimatedAmount * 365) * (maximumAge - currentAge);

console.log(`You will need ${totalNeeded} to last you until the ripe old age of ${maximumAge}`);


//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let radius = 4;

let circumference = Math.PI * 2*radius;

let area = Math.PI * radius * radius;

console.log(`The circumference is ${circumference}`);

console.log(`The area is ${area}`);


//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celsius = 20;

let celsiusToF = celsius * 9/5 + 32;

let fahrenheit = 75;

let fahrenToC = (fahrenheit - 32) * 5/9;


console.log(`20°C is ${celsiusToF}°F`);

console.log(`75°F is ${fahrenToC}°C`)



//Lab2(Javascript Functions)
// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."


function squareNumber(a){

let square = a*a;

    return `The result of squaring the number ${a} is ${square}`;    
    
}

squareNumber(3);


// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".


function halfOf(numTwo) {

let halfTwo = numTwo / 2;
    
     return `Half of ${numTwo} is  ${halfTwo}`;
    
    
}

halfOf(5);


// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."


function percentOf(number1, number2){
    
    let percent = number1 / number2 * 100;

    return`${number1} is ${percent} % of ${number2}`;

}

percentOf(5, 10);

// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.


function areaOfCircle(radius){
    
    let area= Math.PI * (radius * radius);

    return`The area for a circle with a radius of 2 is ${area}`;


    
}

areaOfCircle(2);

// EXERCISE 5
// Write a function named runAll that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).


function runAll(num){

    let half    = num / 2;
    let squared = Math.pow(half, 2); //16
    let area    = Math.PI *(squared * squared); //
    console.log(area);
    let percent = area / squared * 100;

    
    return `${area} is ${percent}% of ${squared}`;

}
runAll(8);

/* Document Output
In HTML, create an <ol>
Within the ordered-list, add 10 <li>
Give each list-item a unique id (ex1, ex2, etc, for example)
Instead of outputting to the console, put the string output from the previous 10 exercises to the document, with each string of output going into its own list item. (There are a few ways to write this solution, consideration given to methods that are more efficient - as long as they're still readable and logical)*/

let fTell = document.getElementById('FortuneTeller');
fTell.innerHTML = `You will be a ${jobTitle} in ${geographicLocation}, making ${annualSalary} for ${companyName}`;

let aCal = document.getElementById('AgeCalculator');
aCal.innerHTML = `They are ${currentYear - birthYear} years old.`;

let lCal = document.getElementById('LifetimeSupplyCalculator');
lCal.innerHTML = `You will need ${totalNeeded} to last you until the ripe old age of ${maximumAge}`;

let tGeo = document.getElementById('TheGeometrizer');
tGeo.innerHTML = `The circumference is ${circumference} & The area is ${area}`;

let tCon = document.getElementById('TemperatureConverter');
tCon.innerHTML = `20°C is ${celsiusToF}°F & 75°F is ${fahrenToC}°C`;

let jEx1 = document.getElementById('JSExercise');
jEx1.innerHTML = squareNumber(3);

let eX2 = document.getElementById('JSExercise2');
eX2.innerHTML = halfOf(5);

let eX3 = document.getElementById('JSExercise3');
eX3.innerHTML = percentOf(5, 10);

let eX4 = document.getElementById('JSExercise4');
eX4.innerHTML = areaOfCircle(2);


let eX5 = document.getElementById('JSExercise5');
eX5.innerHTML = runAll(8);
