function solution(num_list) {
    var answer = 0;
    
    if (num_list.length > 10) {
        num_list.forEach((e) => answer += e);
    } else {
        answer++; 
        num_list.forEach((e) => answer *= e);
    }
    return answer;
}