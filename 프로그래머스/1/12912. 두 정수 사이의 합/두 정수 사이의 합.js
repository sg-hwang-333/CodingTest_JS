function solution(a, b) {
    var answer = 0;
    
    if (a == b) return a;
    
    for (let i = (a > b ? b : a); i <= (a < b ? b : a); i++) {
        answer += i;
    }
    return answer;
}