function solution(arr, flag) {
    var answer = [];
    
    for (let i in flag) {
        if (flag[i]) {
            for (let j = 0; j < arr[i]*2; j++) 
            answer.push(arr[i]);
        } else {
            for (let j = 0; j < arr[i]; j++)
            answer.pop();
        }
    }
    
    return answer;
}