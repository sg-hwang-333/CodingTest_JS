function solution(s) {
    var answer = s.split('')[0].toUpperCase();
    
    for (let i = 1; i < s.length; i++) {
        if (s[i-1] === ' ') answer += s[i].toUpperCase();
        else answer += s[i].toLowerCase();
    }
    
    return answer;
}