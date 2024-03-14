function solution(my_string) {
    var answer = my_string.split('').map((e) => {
        if (!isNaN(e)) return e;
    }).join('').split('').sort((a,b) => a - b).map(Number);
    return answer;
}