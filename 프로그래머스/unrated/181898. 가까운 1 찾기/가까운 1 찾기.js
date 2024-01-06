function solution(arr, idx) {
    let answer = arr.slice(idx, arr.length).indexOf(1);
    return answer == -1 ? -1 : answer += idx;
}