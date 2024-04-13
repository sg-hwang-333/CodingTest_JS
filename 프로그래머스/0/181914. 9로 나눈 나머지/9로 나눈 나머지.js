function solution(number) {
    var answer = 0;
    
    for (let x of number.split('')) {
        answer += parseInt(x);
    }
    
    return answer%9;
}