function solution(my_strings, parts) {
    var answer = '';
    
    for (let i in my_strings) {
        answer += my_strings[i].substring(parts[i][0], parts[i][1]+1);
    }
    
    return answer;
}