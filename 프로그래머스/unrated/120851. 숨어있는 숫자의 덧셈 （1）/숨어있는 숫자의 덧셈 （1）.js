function solution(my_string) {
    var answer = 0;
    my_string = my_string.replace(/[^0-9]/ig, "");
    
    for (let x of my_string.split('')) {
        answer += parseInt(x);
    }
    
    return answer;
}