function solution(n) {
    var answer = 2;
    for (let i = 1; i < n/2; i++) {
        if (i * i == n) {
            answer = 1; 
            break;
        }
    }
    return answer;
}