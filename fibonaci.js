const fibonaci = (number) => {
    if (number == 0 || number == 1) {
        return 1
    } else{
        return fibonaci(number-1) + fibonaci(number-2)
    }
}

for (let index = 0; index < 6; index++) {
    console.log(index, "", fibonaci(index));
}