function solution(emergency) {
    var answer = [];
    let sortedArr = [...emergency].sort((a,b) => a - b);
    
    for (let x of sortedArr) {
        answer.push(emergency.length - emergency.indexOf(x));
    }
    
    return answer;
}