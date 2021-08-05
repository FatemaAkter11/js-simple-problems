//Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.
const number = -6;
const output = Math.abs(number);
//console.log(output); //output = 6

//Returns the smallest integer greater than or equal to its numeric argument.
const myCeilNumber = 19.3456;
const ceilOutput = Math.ceil(myCeilNumber);
//console.log(ceilOutput); //output = 20


//Returns the greatest integer less than or equal to its numeric argument
const myFloorNumber = 19.3456;
const floorOutput = Math.floor(myFloorNumber);
//console.log(floorOutput); //output = 19

//Returns a supplied numeric expression rounded to the nearest integer.
const myRoundNumber = 19.56;
const roundOutput = Math.round(myRoundNumber);
//console.log(roundOutput); //output = 20


//Returns a pseudorandom number between 0 and 1.
//const randomOutput = Math.random();
//console.log(randomOutput);
//or
// const randomOutput = Math.random() * 6;
// const Output = Math.round(randomOutput);
// console.log(Output);

//or for loop use

for (let i = 0; i <= 30; i++) {
    const randomOutput = Math.random() * 6;
    const Output = Math.round(randomOutput);
    console.log(Output);
}








