function solution(x) {
    let digitSum = 0;
    for (let n of x.toString()) {
        digitSum += parseInt(n);
    }
    return x % digitSum == 0 ? true : false;
}