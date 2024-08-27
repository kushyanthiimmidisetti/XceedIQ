//Declare variables for the following and assign appropriate values:

let name="Kushyanthi Immidisetti";
var age=19;
let village="Allipudi";
let isStudent=true;
let emptval=null;
let undefval;

const pi=3.14159;
let greeting="Hello, world!";
let isSunny=true;
let favoriteNumber=5;

//Print the data type of each variable you created in the previous section using the `typeof` operator.

console.log(typeof name);
console.log(typeof age);
console.log(typeof village);
console.log(typeof isStudent);
console.log(typeof emptval);
console.log(typeof undefval);
console.log(typeof pi);
console.log(typeof greeting);
console.log(typeof isSunny);
console.log(typeof favoriteNumber);

//Create a variable `mixedValue` and assign it a value of your choice that includes multiple data types (e.g., a string, a number, and a boolean).
let mixedValue="Hello,Good morning. It's "+favoriteNumber+"'o clock"+"and is it sunny? I think so"+isSunny;

//Print the data type of `mixedValue`.
console.log(typeof mixedValue);

//Operators:

// Perform the following arithmetic operations using variables:
let x=300;
let y=200;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

//Use comparison operators to compare the values of variables:
console.log(x==y);
console.log(x!=y);
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);

//Use logical operators to combine conditions:
console.log(x>y && x<y);
console.log(x>y || x<y);
console.log(!(x>y));

//Use the ternary operator to conditionally assign a value to a variable.
let minimum=(x<y)?x:y;

//Additional Tasks:
//Create a variable `temperature` and assign it a temperature value in Fahrenheit.
var temp=98;

//Convert the temperature to Celsius using the formula: Celsius = (Fahrenheit - 32) * 5/9.
let celsius=(temp-32)*5/9;

//Print the converted temperature.
console.log(celsius);

//Create a variable `age` and assign it a value.
let age=25;

//Determine whether the person is a minor, an adult, or a senior citizen based on the age.
let type;
if(age<18) {
    type="minor";
    } else if(age>=18 && age<=64) {
        type="adult";
    } else {
            type="senior";
            }

// Print the appropriate message.
console.log(`The person is an ${type}`);