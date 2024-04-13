function solution(arr, intervals) {
    var answer = [];
    
        
    for (let i in intervals) {
        
        for (let j = intervals[i][0]; j <= intervals[i][1]; j++ ) {
            answer.push(arr[j]);
        }
    }
    
    return answer;
}