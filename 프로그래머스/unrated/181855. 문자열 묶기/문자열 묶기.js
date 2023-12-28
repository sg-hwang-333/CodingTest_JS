function solution(strArr) {
    let arr = Array.from({length: strArr.length}, () => 0);;
    for (let x of strArr) {
        arr[x.length]++;
    }
    
    return arr.sort((a, b) =>  a - b)[arr.length-1];
}