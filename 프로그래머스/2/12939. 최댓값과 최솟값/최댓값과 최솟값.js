function solution(s) {
    let strArr = s.split(' ');
    return `${Math.min(...strArr)} ${Math.max(...strArr)}`;
}