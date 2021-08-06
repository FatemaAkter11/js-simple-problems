/* function fibonacciSeries(num) {
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboSeries = fibonacciSeries(13);
console.log(fiboSeries); */

// unexpected input solution
function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return 'Please give a number';
    }
    else if (num < 2) {
        return 'Please enter positive number greater than 1';
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboSeries = fibonacciSeries(3);
console.log(fiboSeries);