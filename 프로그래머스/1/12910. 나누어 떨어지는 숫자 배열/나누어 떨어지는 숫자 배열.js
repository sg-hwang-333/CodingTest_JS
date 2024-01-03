function solution(arr, divisor) {
    var answer = [];
    
    for (let x of arr) {
        if (x % divisor == 0) answer.push(x);
    }
    if (answer.length == 0) return [-1];
    return answer.sort((a,b) => a-b);
}