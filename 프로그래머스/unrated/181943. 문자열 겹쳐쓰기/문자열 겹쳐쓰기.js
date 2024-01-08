function solution(my_string, overwrite_string, s) {
    
    // 에러 발생: "hahahahahahahahha", "youretoslow", 4 ==> "hahayouretoslowha"
    // return my_string.replace(my_string.slice(s, overwrite_string.length+s), overwrite_string);
    
    let answer = my_string.slice(0, s);
    
    for (let i = 0; i < overwrite_string.length; i++) {
        answer += overwrite_string[i];
    }
    for (let i = overwrite_string.length + s; i < my_string.length; i++ ) {
        answer += my_string[i];
    }
    
    return answer;
}