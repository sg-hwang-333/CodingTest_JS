function solution(arr, queries) {
    var answer = [];
    
    for (let x of queries) {
        [ arr[x[0]], arr[x[1]]] = [arr[x[1]], arr[x[0]] ]
    }
    
    return arr;
}