function solution(order) {
    var answer = 0;
    
    for (let x of order.toString().split('')) {
        if (x == '3' || x == '6' || x == '9') answer++;
    }
    
    return answer;
}