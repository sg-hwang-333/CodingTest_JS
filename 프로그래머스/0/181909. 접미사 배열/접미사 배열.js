function solution(my_string) {
    var answer = [''];
    let j = 0;
    
    for (let i = my_string.length-1; i >= 0; i-- ) {
        answer.push(my_string[i].concat(answer[j]));
        j++;
    }
    answer.shift();
    
    return answer.sort();
}