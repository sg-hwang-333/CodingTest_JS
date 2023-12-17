function solution(num_list) {
    let oddSum = 0, evenSum = 0;
    
    for (let i in num_list) {
        if (i % 2 !== 0) {
            oddSum += num_list[i];
        } else {
            evenSum += num_list[i];
        }
    };
    return Math.max(oddSum , evenSum);
}