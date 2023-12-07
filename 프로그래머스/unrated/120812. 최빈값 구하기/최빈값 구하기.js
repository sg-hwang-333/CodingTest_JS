function solution(array) {
    let answer = 0;
    
    if (array.length === 1) return array[0];
    
    array.sort((a,b) => a - b);
    let arr = Array.from({length: array[array.length-1] + 1}, () => 0);

    for (let i of array) {
        arr[i]++;
    }
    
    // max
    let max = 0;
    for (let i in arr) {
        if (max < arr[i]) {
            answer = parseInt(i);
            max = arr[i];
        }
    }
    arr.sort((a,b) => a - b);
    let len = arr.length;
    
    if (arr[len-1] == arr[len-2]) return -1;
    
    return answer;
    
//     else return array[len-1];
    
}