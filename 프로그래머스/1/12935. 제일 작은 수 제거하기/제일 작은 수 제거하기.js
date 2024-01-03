function solution(arr) {
    if (arr.length == 1) return [-1];
    
    var answer = [];
    
    return arr.filter((e) => e !== Math.min.apply(null, arr));
}