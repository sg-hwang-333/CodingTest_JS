function solution(sides) {
    var answer = 1;
    sides.sort();
    let max = sides[sides.length - 1];
    
    let sum = 0;
    for (let i = 0; i < sides.length-1; i++) {
        sum += sides[i];
    }
    if (sum <= max) answer++;
    
    return answer;
}