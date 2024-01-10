function solution(numLog) {
    var answer = '';
    
    for (let i = 1; i < numLog.length; i++) {
        if (numLog[i-1] < numLog[i]) {
            if (numLog[i] - 10 == numLog[i-1]) answer += "d";
            else answer += "w";
        } else {
            if (numLog[i] + 10 == numLog[i-1]) answer += "a";
            else answer += "s";
        }
    }
    
    return answer;
}