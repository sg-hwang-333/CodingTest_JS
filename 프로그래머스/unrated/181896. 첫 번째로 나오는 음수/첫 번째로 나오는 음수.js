function solution(num_list) {
    var answer = -1;
    for (let i in num_list) {
        if (num_list[i] < 0) return parseInt(i);
    }
    return answer;
}