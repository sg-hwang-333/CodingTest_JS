function solution(numbers) {
    var answer = 0;
    let sum = 0;
    
    for (let x of numbers) {
        sum += x;
    }
    
    answer = sum / numbers.length;
    
    return answer;
}