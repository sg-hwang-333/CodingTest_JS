function solution(str_list, ex) {
    let answer = '';
    for (let x of str_list) {
        if (x.includes(ex) == false) answer += x;  
    }
    return answer;
}