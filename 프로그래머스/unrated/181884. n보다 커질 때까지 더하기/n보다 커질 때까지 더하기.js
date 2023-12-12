function solution(numbers, n) {
    var answer = 0;
    
    for (let x of numbers) {
        if (answer > n) break;
        else answer += x;
    }
    
    return answer;
}