function solution(phone_number) {
    // return phone_number.split('').map((e, i)=> {
    //     if (i < phone_number.length-4) return "*";
    //     else return e;
    // }).join('');
    
    var answer = phone_number.split('');
    
    for (let i = 0; i < phone_number.length-4; i++) {
        answer[i] = "*";
    }
    
    return answer.join('');
}