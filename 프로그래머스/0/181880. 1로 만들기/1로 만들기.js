function solution(num_list) {
    var answer = 0;
    
    for (let x of num_list) {
        while ( x > 1) {
            if (x % 2 !== 0) x -= 1;
                
            x /= 2;
            answer++;
        }
        
    }
    
    return answer;
}