function solution(myString) {
    var answer = '';
    
    for (let i in myString) {
        if (myString.charCodeAt(i) <= 108) {
            answer += 'l';
        } else {
            answer += myString[i];
        }
    }
    
    return answer;
}