function solution(n) {
    var answer = 0;
    let piece = 6; 
    let temp = 0;
    
    while (temp !== piece) {
        if (temp > piece) piece += 6;
        else temp += n;
    }
    
    answer = piece / 6;
    return answer;
}