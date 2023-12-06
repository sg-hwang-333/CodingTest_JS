function solution(numbers) {
    var answer = Number.MIN_SAFE_INTEGER;
    let len = numbers.length - 1;
    numbers.sort((a,b) => a - b);
    
    if (numbers[0] < 0 && numbers[1] < 0) 
        answer = numbers[0] * numbers[1]
    answer = Math.max(answer, numbers[len] * numbers[len-1]);
    
    return answer;
}