function solution(num_str) {
    return num_str.split('').reduce((sum, e) => sum += parseInt(e), 0);
}