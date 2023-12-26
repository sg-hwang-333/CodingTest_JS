function solution(arr, delete_list) {
    var answer = [];
    
    for (let x of arr) {
        let i = 0;
        while (x !== delete_list[i] && i < delete_list.length) {
            i++;
        }
        if (i == delete_list.length) answer.push(x);
    }
    
    return answer;
}