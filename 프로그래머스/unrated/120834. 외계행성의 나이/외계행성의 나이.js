function solution(age) {
    var answer = '';
    for (let x of age.toString()) {
        answer += String.fromCharCode(parseInt(x)+97);
    }
    return answer;
}