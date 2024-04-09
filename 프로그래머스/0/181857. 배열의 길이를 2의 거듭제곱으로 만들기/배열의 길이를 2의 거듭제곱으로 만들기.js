function solution(arr) {
    if (arr.length == 1) return arr;
    let power = 2;
    
    while (power !== arr.length) {
        if (power < arr.length) power *= 2;
        else arr.push(0);
    }
    
    return arr;
}