function solution(my_string, n) {
    var answer = '';
    for (let x of my_string) {
        for (let i = 0; i < n; i++) {
            answer += x;
        }
    }
    return answer;
}