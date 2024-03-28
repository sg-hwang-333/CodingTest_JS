function solution(i, j, k) {
    var answer = 0;
    
    while (i <= j) {
        
        if (i.toString().includes(k.toString())) {
            for (let x of i.toString()) {
                if (x == k) answer++;
            }
        }
        
        i++;
    }
    
    return answer;
}