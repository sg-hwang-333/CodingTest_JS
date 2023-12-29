function solution(array, n) {
    var answer = 0;
    if (array.includes(n)) return n;
    
    array.sort((a,b) => a - b);
    
    let chkArr = Array.from({length: array.length}).fill(0);
    
    for (let i in array) {
        if (array[i] > n) chkArr[i] = array[i] - n;
        else if (array[i] < n) chkArr[i] = n - array[i]
    }
    
    return array[chkArr.indexOf(Math.min.apply(null, chkArr))];
}