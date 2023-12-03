function solution(strlist) {
    var answer = [];
    
    for (let i in strlist) {
        answer[i] = strlist[i].length;
    }
    
    return answer;
}