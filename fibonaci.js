const fibonaci = (number) => {
    if (number == 0 || number == 1) {
        return 1
    } else{
        return fibonaci(number-1) + fibonaci(number-2)
    }
}

console.log(fibonaci(1));
console.log(fibonaci(2));
console.log(fibonaci(3));
console.log(fibonaci(4));