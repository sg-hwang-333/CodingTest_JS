function solution(balls, share) {
    return Math.round(factorial(balls) / ((factorial(balls-share)) * factorial(share)));
}

function factorial(n) {
    let sum = 1;
    
    for (let i = 2; i <= n; i++ ){
        sum *= i;    
    }
    
    return sum;
}