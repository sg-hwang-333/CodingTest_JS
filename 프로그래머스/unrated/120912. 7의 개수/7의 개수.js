function solution(array) {
    let answer = 0;
    for (let x of array.join('').split('')) {
        if (x == "7") answer++;
    }
    return answer;
}