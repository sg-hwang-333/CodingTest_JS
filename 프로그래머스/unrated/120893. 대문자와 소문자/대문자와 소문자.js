function solution(my_string) {
    var answer = '';
    
    for (let x of my_string) {
        if (x.toUpperCase() === x) {
            answer += x.toLowerCase();
        } else {
            answer += x.toUpperCase();
        }
    }
    return answer;
}