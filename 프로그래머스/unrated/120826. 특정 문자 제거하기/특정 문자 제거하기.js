function solution(my_string, letter) {
    var answer = '';
    
    for (let x of my_string) {
        if (x === letter) continue;
        answer += x;
    }
    
    return answer;
}