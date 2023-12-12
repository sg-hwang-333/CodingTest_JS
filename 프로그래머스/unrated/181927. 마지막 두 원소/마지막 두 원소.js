function solution(num_list) {
    var answer = num_list;
    let len = num_list.length;
    let lastNum = num_list[len-1];
    let slastNum = num_list[len-2];
    
    if (lastNum > slastNum) answer.push(lastNum - slastNum);
    else answer.push(lastNum * 2); 
        
    return answer;
}