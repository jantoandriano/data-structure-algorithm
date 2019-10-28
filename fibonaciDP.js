
const fib = (n, memo) => {
    let result = 0
    if (memo[n] != null) {
        return memo[n]
    } else if (n == 1 || n == 2) {
        result = 1
    } else {
        result = fib(n-1) + fib(n-2)
        memo[n] = result
    }
    return result
}

console.log(fib(4));
