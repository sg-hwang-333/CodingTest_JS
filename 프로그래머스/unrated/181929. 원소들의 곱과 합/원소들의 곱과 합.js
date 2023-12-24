function solution(num_list) {
    let sum = 0, mul = 1;
    for (let x of num_list) {
        sum += x;
        mul *= x;
    }
    return sum**2 > mul ? 1 : 0;
}