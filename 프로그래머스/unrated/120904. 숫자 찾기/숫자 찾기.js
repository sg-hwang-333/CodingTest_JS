function solution(num, k) {
    var answer = 0;
    for (let x of num.toString()) {
        answer++;
        if (x == k) return answer;
    }
    return -1;
}