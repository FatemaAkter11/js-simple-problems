//swap variable

var firstNumber = 7;
var seceondNumber = 8;
//console.log(firstNumber, seceondNumber); //output = 7 8

//swap with temp

/* var firstNumber = 7;
var seceondNumber = 8;
var temp = firstNumber;
firstNumber = seceondNumber;
seceondNumber = temp;
console.log(firstNumber, seceondNumber); */ // output = 8 7

//destructing

[firstNumber, seceondNumber] = [seceondNumber, firstNumber];
console.log(firstNumber, seceondNumber);
